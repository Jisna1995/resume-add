import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography, Paper, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaFileDownload, FaHistory } from "react-icons/fa";
import html2canvas from 'html2canvas';
import jsPDF from 'jsPDF';
import Edit from '../Components/Edit';
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({ userInput, finish, resumeId,setUserInput }) {
  const [downloadStatus, setDownloadStatus] = useState(false);
const downloadCV = async () => {
  if (!userInput) return;

  const input = document.getElementById('result');
  if (!input) return;

  const canvas = await html2canvas(input, { scale: 2 });
  const imgUrl = canvas.toDataURL('image/png');

 const pdf = new jsPDF();  // Use 'pdf', not 'pdfnew'
const pdfWidth = pdf.internal.pageSize.getWidth();
const pdfHeight = pdf.internal.pageSize.getHeight();
pdf.addImage(imgUrl,'PNG', 0, 0, pdfWidth, pdfHeight);
pdf.save('resume.pdf');


  const localTimeDate = new Date();
  const timeStamp = `${localTimeDate.toLocaleDateString()}, ${localTimeDate.toLocaleTimeString()}`;

  try {
    await addDownloadHistoryAPI({ ...userInput, imgUrl, timeStamp });
    setDownloadStatus(true);
  } catch (err) {
    console.error(err);
  }
};

  

  return (
    <div style={{ marginTop: '100px' }}>
      {userInput.personalDetails.name !== "" && (
        <div className="flex-column">
          {finish && (
            <div className='d-flex justify-content-end align-items-center'>
              <button onClick={downloadCV} className='btn fs-3 text-primary'><FaFileDownload /></button>
              <div><Edit resumeId={resumeId} setUpdateResume={setUserInput}/></div>
              {downloadStatus && (
                <Link to={'/history'} className='btn fs-3 text-primary'><FaHistory /></Link>
              )}
              <Link to={'/resume-generator'} className='btn text-primary'>BACK</Link>
            </div>
          )}

          <Box>
            <Paper elevation={5} id="result">
              <Typography variant="h4" align="center" component="div">
                <h2>Name: {userInput.personalDetails.name}</h2>
              </Typography>

              <Typography variant="subtitle1" align="center" color="#00b0ff" component="div">
                <div>Job title: {userInput.personalDetails.jobTitle}</div>
              </Typography>

              <Typography variant="body2" align="center" component="div">
                <div>{userInput.personalDetails.location}</div>
                <div>{userInput.personalDetails.email}</div>
                <div>{userInput.personalDetails.phone}</div>
              </Typography>

              <Typography variant="body2" align="center" component="div">
                <Link to={userInput.personalDetails.github} target="_blank">Github</Link> |{" "}
                <Link to={userInput.personalDetails.linkedIn} target="_blank">LinkedIn</Link> |{" "}
                <Link to={userInput.personalDetails.portfolio} target="_blank">Portfolio</Link>
              </Typography>

              <Divider>Summary</Divider>
              <Typography mb={3} component="div">{userInput.summary}</Typography>

              <Divider>Education</Divider>
              <Typography variant="body2" align="center" mb={4} component="div">
                <div>{userInput.education.course}</div>
                <div>{userInput.education.college}</div>
                <div>{userInput.education.university}</div>
                <div>{userInput.education.year}</div>
              </Typography>

              <Divider>Professional Experience</Divider>
              <Typography variant="body2" align="center" mb={4} component="div">
                <div>{userInput.experience.job}</div>
                <div>{userInput.experience.company}</div>
                <div>{userInput.experience.location}</div>
                <div>{userInput.experience.duration}</div>
              </Typography>

              <Divider>Skills</Divider>
              <Stack spacing={2} direction="row" sx={{ flexWrap: 'wrap', gap: '10px', padding: '10px' }}>
                {userInput.skills.map((skill, index) => (
                  <Button key={index} variant="contained">{skill}</Button>
                ))}
              </Stack>
            </Paper>
          </Box>
        </div>
      )}
    </div>
  );
}

export default Preview;
