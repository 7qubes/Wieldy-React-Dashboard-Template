from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

import io
import re
import uvicorn
import pandas as pd
import seaborn as sns
import pandasql as ps
import scipy.stats as stats
import matplotlib.pyplot as plt

import boto3
@app.get("/")
async def root():
return {"message": "Hello World"}



aws_access_key_id = "AKIAQ3ZBAFBP7JXZPAE7"
aws_secret_access_key = "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"
region = "us-east-2"

class Item(BaseModel):
    errorMsg: str
    string1: str
    key: str
    row: int
    resolveError: str


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


session = boto3.Session(
      region_name = region, 
       aws_access_key_id=aws_access_key_id, 
       aws_secret_access_key=aws_secret_access_key)

# # now instantiate the services
 s3_resource = session.resource('s3')


 #first_bucket_name, first_response = create_bucket(bucket_prefix='firstpythonbucket', s3_connection=s3_resource.meta.client)

# #second_bucket_name, second_response = create_bucket(bucket_prefix='secondpythonbucket', s3_connection=s3_resource)
 first_bucket_name = 'uic7qubes'
# #Giving the file name that needs to be uploaded
 first_file_name = 'Sales Records.csv'
 first_bucket = s3_resource.Bucket(name=first_bucket_name)
 first_object = s3_resource.Object(bucket_name=first_bucket_name, key=first_file_name)
 #first_object_again = first_bucket.Object(first_file_name)
 #first_bucket_again = first_object.Bucket()

# # Run only when you want to upload csv 
 @app.get("/uploadCSVs3")
 def upload_csv_s3(first_file_name,bucket_name):
     first_bucket_name, bucket_response = create_bucket(bucket_name,s3_resource,session.region_name)
     first_bucket = s3_resource.Bucket(name=first_bucket_name)
     first_object = s3_resource.Object(bucket_name=first_bucket_name, key=first_file_name)
     first_object.upload_file(first_file_name)

 @app.get("/createBucket")   
 def create_bucket(bucket_name, s3_connection,current_region):
     session = boto3.session.Session()
     current_region = session.region_name      #Comment this line if you have a region
     try:
         bucket_response = s3_connection.create_bucket(Bucket=bucket_name, CreateBucketConfiguration={'LocationConstraint': current_region})
         print(f'Bucket name = {bucket_name}\nRegion = {current_region}')
     except S3CreateError:
         print("Bucket name already exists")
         bucket_response = "Bucket name already exists"
     return bucket_name, bucket_response


 # Function to remove punctuations
 @app.get("/Removepunctuations")
 def replace_punctuations(column):
     return re.sub(r'[@_!#$%^&*()<>,?/\|}{~;:=\-\+\[\]\\\\]',"", column)

# # Functions to check for presence of punctuations
 def find_punctuations(column):
     return re.findall(r'[@_!#$%^&*()<>,?/\|}{~;:=\-\+\[\]\\\\]', column)

# # Function to clean the data
 @app.get("/Dataclean")
 def Data_validation(df):
    
#     # Creating an emput dataframe to store the punctuations removed
     punc_removed_df = pd.DataFrame(columns = ['Column Name', 'Punctuations removed'])
    
#     # Dictionary to rename columns which include a space with underscore. Eg: "Order_Date" will be renamed to "Order_Date"
#     # This will hep with SQL queries later
#    columns_to_rename = {}
    
#     # Iterating each column
     for i in range(df.shape[1]):
        
#         # List to store all punctuations found in the columns
         puncs_removed  = []
        
#         # Renaming columns which include a space with underscore. This will hep with SQL queries later
         if " " in df.columns[i]:
             columns_to_rename[df.columns[i]] = "_".join(df.columns[i].split(" "))
        
#         # Ignoring date & time columns for punctuation removal (since 8:12:30 will be treated as a number 81230 after cleaning
#         # instead of beng considered as a time
         if "date" not in df.columns[i].lower() and "time" not in df.columns[i].lower():
             try:
                
#                 # If it is possible to convert the column to a number after removing punctuations
                 if df.iloc[:,i].apply(replace_punctuations).astype(float).any():
                    
                     # Storing the punctuations in the previously defined list
                     for val in df.iloc[:,i].apply(find_punctuations):
                         puncs_removed = puncs_removed + val
                    
#                     # Replacing the punctuations and converting string to float
                     df.iloc[:,i] = df.iloc[:,i].apply(replace_punctuations).astype(float)
                    
                     # Concatenating all the removed punctuations as a string and appending to the dataframe
#                     punc_removed_str = "  ".join(set(puncs_removed))
                     punc_removed_df = punc_removed_df.append({'Column Name':df.columns[i], 
                                                               'Punctuations removed':punc_removed_str}, 
                                                              ignore_index = True)
                
             except:
                 None
    
     # Renaming columns which include a space with underscore
     df.rename(columns=columns_to_rename, inplace=True)
    
     return df, punc_removed_df

 @app.get("/coloumnError")
 #to be called in frontend # #character_columns, factor_columns, numeric_columns = column_seggregation(df, column_types_df)
# def column_seggregation(df, column_types_df):
    
#     # Empty lists to store the columns based on data type
#     character_columns, factor_columns, numeric_columns = [] , [] , []
     lt = df.shape[0]
    
#     # Iterating every columns
     for val in df.columns:
        
#         # If count of total unique values is less than 5% of overall data it is considered as factor
         if len(df[val].unique()) / lt < 0.05:
             factor_columns.append(val)
        
         # Else if the column contains only numbers and unique values count is greater than 5%, it is numeric
         elif column_types_df.loc[val][0] == "Number" and "id" not in val.lower():
             numeric_columns.append(val)
            
         # Else charater type column
         else:
             character_columns.append(val)
            
     return character_columns, factor_columns, numeric_columns



 #For calling Queries the functions are stated under 

 # Correlation test across two numeric columns
 def correlation_tests(numeric_columns, df):
    
      Plot color
     col_palette = ["royalblue","darkorange","lime"]
     ct = 0
    
    Performing correaltion test for every two column combination across list of nueric columns
     for i in range(len(numeric_columns)-1):
         for j in range(i+1,len(numeric_columns)):
        
#            p_val = stats.pearsonr(df[numeric_columns[i]],df[numeric_columns[j]])[1]
            
#             # If the p-value of the test is less than 0.05 plotting a graph to indicate findings
#             if p_val <= 0.05:
                
#                 # Axes label and title of plot 
#                 X_Axis_Label = " ".join(numeric_columns[i].split("_"))
#                 Y_Axis_Label = " ".join(numeric_columns[j].split("_"))
#                 Title = X_Axis_Label + " vs " + Y_Axis_Label
                
#                 # Plot color
#                 ct+=1
#                 color = col_palette[ct%3]
                
#                 # Scatter plot
#                 df.plot(kind="scatter", x=numeric_columns[i], y=numeric_columns[j], color = color, figsize = (8,8))
#                 plt.title(Title, fontsize = 22)
                 plt.xlabel(Y_Axis_Label, fontsize = 18)
                 plt.ylabel(X_Axis_Label, fontsize = 18)
                 plt.show()
     return None

 #ANOVA test across one factor and one numeric columns
 def anova_tests(numeric_columns, factor_columns, df):

     col_palette = ["royalblue","darkorange","lime"]
     ct = 0
    
     # Checking every (factor, numeric) column combination
     for f_col in factor_columns:
         for n_col in numeric_columns:
        
             factor_levels = df[f_col].unique()
            
             fvalue, pvalue = stats.f_oneway(*(df[df[f_col] == fl][n_col] for fl in factor_levels))
        
             # If p-value is less than 0.05
             if pvalue <=0.05:
                 ct+=1
                
                 # Finding the average value for eac factor level an storing it ina dictionary
                 bar_plot_values = {}
                 for fl in factor_levels:
                     bar_plot_values[fl] = round(df.loc[ df[f_col] ==fl ,n_col].mean(),4)
                
                 # Axes label and title of plot 
                 X_Axis_Label = " ".join(f_col.split("_"))
                 Y_Axis_Label = "Mean "+" ".join(n_col.split("_"))
                 Title = Y_Axis_Label + " per " + X_Axis_Label
                 color = col_palette[ct%3]
                
                 # Converting "bar_plot_values" dictionary to dataframe and sorting it
                 temp_df = pd.DataFrame(list(bar_plot_values.items()), columns=[X_Axis_Label,Y_Axis_Label])
                 temp_df = temp_df.sort_values(by=[Y_Axis_Label])
                
                 # If there are more than six factor levels perform a horizontal/row barl plot. Else vertical bar plot
                 if (len(factor_levels)>6):
                     figsize = (10, len(factor_levels)/2)
                     temp_df.plot.barh(x=X_Axis_Label, y=Y_Axis_Label, figsize = figsize, color = color)
                
                 else:
                     figsize = (10, 10)
                     temp_df.plot.bar(x=X_Axis_Label, y=Y_Axis_Label, figsize = figsize, color = color)

                 plt.title(Title, fontsize = 22)
                 plt.xlabel(Y_Axis_Label, fontsize = 18)
                 plt.ylabel(X_Axis_Label, fontsize = 18)
                 plt.show()
     return None

 # SQL Query 1 to group by months
 def sql_query1(ncol,df):
    
     # Query to group by month and find the average value of numeric column. Storing result in a dataframe
     Query1 = "SELECT Month, AVG({0}) AS {1} FROM df GROUP BY 1".format(ncol, "Average_"+ncol)
     df1 = ps.sqldf(Query1, locals())
    
     # Axes label and title of plot
     Title = "Average {} across months".format(" ".join(ncol.split("_")))
     Y_Axis_Label = " ".join(df1.columns[1].split("_"))
     X_Axis_Label = "Months"

     # Bar plot based on query result
     df1.plot.barh(x=df1.columns[0], y=df1.columns[1], figsize = (10,6), color = "seagreen")
    
     # Remove exponents and display full numbers in the plot
     ax = plt.gca()
     ax.get_xaxis().get_major_formatter().set_scientific(False)
    
     plt.title(Title, fontsize = 22)
     plt.xlabel(Y_Axis_Label, fontsize = 18)
     plt.ylabel(X_Axis_Label, fontsize = 18)
     plt.show()
    
     return None

 # SQL Query 2 to group by year
 def sql_query2(ncol,df):
    
     # Query to group by year and find the sum of values in numeric column. Storing result in a dataframe
     Query2 = "SELECT Year, SUM({0}) AS {1} FROM df GROUP BY 1".format(ncol, "Overall_"+ncol)
     df2 = ps.sqldf(Query2, locals())
    
    # Axes label and title of plot
     Title = "Sum of {} across Years".format(ncol)
     Y_Axis_Label = "Year"
     X_Axis_Label = " ".join(ncol.split("_"))
    
     # Line plot based on query result
     df2.plot.line(x=df2.columns[0], y=df2.columns[1], figsize = (10,6), color = "slateblue")
    
     # Remove exponents and display full numbers in the plot    
     ax = plt.gca()
     ax.get_yaxis().get_major_formatter().set_scientific(False)
   
     plt.title(Title, fontsize = 22)
     plt.xlabel(Y_Axis_Label, fontsize = 18)
     plt.ylabel(X_Axis_Label, fontsize = 18)
     plt.show()
     return None

 # SQL Query 3 to group by year and month
 def sql_query3(ncol,df):
    
     # Query to group by year,month and find the average value of numeric column. Storing result in a dataframe
     Query3 = "SELECT Year,Month, AVG({0}) AS {1} FROM df GROUP BY 1,2".format(ncol, "Average_"+ncol)
     df3 = ps.sqldf(Query3, locals())
     df3["YM"] = df3["Year"].astype(str)+"-"+df3["Month"].astype(str)
     df3[df3.columns[2]] = df3[df3.columns[2]].astype('int64')
    
    # Figure size based on number of unqiue (year,month) values
     if df3.shape[0] < 50:
         figsize = (10,10)
     else:
         figsize = (int(df3.shape[0]/5),10)
    
     # Axes label and title of plot
     Title = "Average {} - Time series visualization".format(" ".join(ncol.split("_")))
     Y_Axis_Label = " ".join(df3.columns[1].split("_"))
     X_Axis_Label = "Year-Month"
    
     # Line plot based on query result
     df3.plot.line(x=df3.columns[3], y=df3.columns[2], figsize = figsize, color = "gold")
    
     # Remove exponents and display full numbers in the plot 
     ax = plt.gca()
     ax.get_yaxis().get_major_formatter().set_scientific(False)
    
     plt.title(Title, fontsize = 22)
     plt.xlabel(Y_Axis_Label, fontsize = 18)
     plt.ylabel(X_Axis_Label, fontsize = 18)
     plt.show()
     return None

# # SQL Query to Group by Categorical vriables and display the frequency distribution
 def sql_query4(fcol,df):
     # Query to group by month and find the average value of numeric column. Storing result in a dataframe
     Query4 = "SELECT {},Count(*) FROM df GROUP BY 1 ORDER BY 2".format(fcol)
     df4 = ps.sqldf(Query4, locals())
     # Axes label and title of plot
     Title = "Frequency {} ".format(" ".join(fcol.split("_")))
     Y_Axis_Label = fcol
     X_Axis_Label = "Frequency"
     df4.plot.barh(x=df4.columns[0], y=df4.columns[1], figsize = (10,6), color = "seagreen")
     # Remove exponents and display full numbers in the plot
     ax = plt.gca()
     ax.get_xaxis().get_major_formatter().set_scientific(False)
    
     plt.title(Title, fontsize = 22)
     plt.xlabel(Y_Axis_Label, fontsize = 18)
     plt.ylabel(X_Axis_Label, fontsize = 18)
     plt.show()
     return None

 @app.get("/Visualization")
 def data_analytics(numeric_columns, factor_columns, df):
    
     # Identifying any date column
     for col_name in df.columns:
         if "date" in col_name.lower():
             date_col = col_name
    
     # Numeric column
     ncol = numeric_columns[1]
     fcol = factor_columns[0]
     print(fcol)
    
     # Extracting month and date from date columns
     df["Month"] = pd.DatetimeIndex(df[date_col]).month
     df["Year"] = pd.DatetimeIndex(df[date_col]).year
    
#     # Subsetting only the Date, Month,  Year and Numeric column
     df_temp = df[[date_col,"Month","Year", ncol]]
    
#     # Correlation tests
     correlation_tests(numeric_columns, df)
    
     # Anova tests
     anova_tests(numeric_columns, factor_columns, df)
    
     # SQL Queries
     sql_query1(ncol, df_temp)
     sql_query2(ncol, df_temp)
     sql_query3(ncol, df_temp)
     sql_query4(fcol, df)
     return None

# Code invoked while hitting the resolve button
@app.get("/resolve/{item}")
async def error_item(item:str):
    
    
    print (item)
    
    return {"data":re.sub(r'[@_!#$%^&*()<>,?/\|}{~;:=\-\+\[\]\\\\]',"",item)}