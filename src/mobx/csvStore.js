export function createCSVStore() {
    return {
        isFileStored: false,
        fileName: '',
        csvData: [],
        addCSVData(data){
            const headers = data[0].split(',');
            console.log(headers);
            if(data) {
                this.removeCSVData();
                
                data.forEach((element, index) => {
                    const colObj = {};
                    
                    if (index != 0) {
                        element.split(',').forEach((colElem, colIndex) => {
                            // colObj[headers[colIndex]] = colElem;
                            colObj[headers[colIndex]] = colElem;    
                        })
                    }
                    console.log(colObj);
                    this.csvData.push(colObj);
                });
            }
        },
        getCSVData() {
            return this.csvData;
        },
        removeCSVData() {
            this.csvData = []
        }
    }
}