//Align and style pdf to be more aesthetic
//fix design of left side
import './resume.css'
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { Document, Page, pdfjs } from 'react-pdf';
import { View } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };

export default function Resume() {
    const [file, setFile] = useState('assets/Resume.pdf');
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <div
            id='resume'
            style={{
                backgroundColor: '#99AAB5',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <h1 
              style={{
                display: 'flex',
                flex: '1',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '6vw',
                overflow: 'hidden',
                padding: '10px',
                color: '#404EED'
              }}
            >
                <a 
                  href="https://docs.google.com/document/d/1WmBt5b2q4WbkGnadHP-Qx6uI7-VqkDmVg1RgikmBp2k/edit?usp=sharing"
                  style={{
                      textDecoration: 'underline'
                  }}
                >
                    Resume
                </a>
            </h1>
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options} style={{display: 'flex', flex: '1', height: '70%'}}>
                {Array.from(new Array(numPages), (el, index) => (
                    <Page size="A4" key={`page_${index + 1}`} pageNumber={index + 1} style={{}}>
                      <View style={{ color: 'white', textAlign: 'center', margin: 30, Maxheight: '70%', overflow: 'hidden'}}>
                      </View>
                    </Page>
                ))}
            </Document>
        </div>
    )
}
