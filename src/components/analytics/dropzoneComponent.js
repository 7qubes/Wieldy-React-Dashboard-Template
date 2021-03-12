import React, { useCallback, useState } from 'react';
import DropZone, { useDropzone } from 'react-dropzone';
import { useCSVStore } from '../../mobx/csvContext';

export default function DropZoneComponent() {

    const csvStore = useCSVStore();

    const [dropBoxMessage, setDropBoxMessage] = useState("Drag 'n' drop some files here, or click to select files");
    const onDrop = useCallback((acceptedFiles) => {
        setDropBoxMessage(acceptedFiles.pop().name)
    }, [])
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({onDrop});
    const files = acceptedFiles.map(file => {
        const reader = new FileReader();
        reader.onload = (r) => {
            csvStore.addCSVData(r.target.result.split('\n'))
        }
        reader.readAsText(file);
    })

    return (
        <div {...getRootProps({className: 'dropZone'})}>
            <input {...getInputProps()} />
            <p>{dropBoxMessage}</p>
        </div>
    )
}