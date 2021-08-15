import React from 'react';
export const generatedHTML = (
  doctor,
  patient,
  medicines,
  advices,
  followup,
  cheifComplaint,
  history,
  diagnosis,
  onExamination,
  investigation,
  date,
) => {
  return `<!DOCTYPE html>
        <html>
        <head>
            <title>
                
            </title>
            <style type="text/css">
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            body{
                font-family: "Poppins",sans-serif;
            }
            .container {
                background: #fdfdfd;
                max-width: 500px;
                margin: 30px auto;
                overflow: auto;
                min-height: 300px;
                border: 1px solid steelblue;
                padding: 10px;
                border-radius: 5px;
                font-size: 20px;
            }
            .doct-info{
                text-align: center;
                margin-bottom: 10px; 
            }
            .same-row{
                width: 100%;
                display: table;
                margin:10px 0px;
            }
            .same-row-label{
                display: table-cell; width: 1px;
            }
            .same-row-input{
                display: table-cell; width: 100%;
                border-bottom: 1px solid gray;
                padding-left: 5px;
            }
            .grid{
                display: grid;
                grid-template-columns: auto auto;
                grid-gap: 5px;
        
        
            }
            .grid-blocks{
                border:1px solid gray;
                border-radius: 4px;
                margin:5px 0px;
                padding: 8px 8px;
            }
            .block-1{
                margin:20px 0px;
            }
            .text{
                width: 100%;font-size: 10px
            }
            .pati-info{
                margin:12px 0px;
            }
        </style>
        </head>
        <body>
            <div class="container">
                <div class="doct-info">
                    <h2 style="color: #0d64d0;">${doctor.doctor_name}</h1>
                        <h4 style="color: green">${
                          doctor.doctor_qualification
                        }</h3>
                            <h2 style="color: #0d64d0">${
                              doctor.doctor_speciality
                            }</h1>
                            </div>
                            <div class="block-1">
                                <div class="same-row">
                                    <div  class="same-row-label"><b>Patient&nbsp;Name&nbsp;:</b></div>	
                                    <div class="same-row-input" >${
                                      patient.patient_name
                                    }</div>
                                </div>
                                <div class="grid">
                                    <div class="col same-row">
                                        <div class="same-row-label"><b>Age&nbsp;:</b></div>
                                        <div  class="same-row-input">${patient.patient_age.toString()}</div>
                                    </div>
                                    <div class="col same-row">
                                        <div class="same-row-label"><b>Date&nbsp;:</b></div>
                                        <div class="same-row-input">${date}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="block-2">
                                <div class="grid">
                                    <div class="grid-block-1 grid-blocks">
                                        <div class="pati-info ">
                                            <div ><b>Rx,</b></div>
        
                                            <div  class="text">${medicines}</div>
                                        </div>
                                        <div class="pati-info ">
                                            <div ><b>Advice,</b></div>
                                            <div  class="text">${advices}</div>
                                        </div>
                                        <div class="pati-info ">
                                            <div ><b>Follow Up,+</b></div>
                                            <div  class="text">${followup}</div>
                                        </div>
                                    </div>
                                    <div class="grid-block-2 grid-blocks">
                                        <div class="pati-info ">
                                            <div ><b>Cheif Complement</b></div>
                                            <div  class="text">${cheifComplaint}</div>
                                        </div>
                                        <div class="pati-info ">
                                            <div ><b>History</b></div>
                                            <div  class="text">${history}</div>
                                        </div>
                                        <div class="pati-info ">
                                            <div ><b>Diagnosis</b></div>
                                            <div  class="text">${diagnosis}</div>
                                        </div>
                                        <div class="pati-info ">
                                            <div ><b>On Examination</b></div>
                                            <div  class="text">${onExamination}</div>
                                        </div>
                                        <div class="pati-info ">
                                            <div ><b>Investigation</b></div>
                                            <div  class="text">${investigation}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </body>
                        </html>`;
};
