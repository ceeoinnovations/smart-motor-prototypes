
import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';
import Navbar from './components/Navbar.js';

Promise.all([
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vSgo-yOI8N1CYTxOkrhxIl8fgDkw3vSRJucrKmYRKMn4ZGAgGrd3Y7lvhAjerrKB0SRQ0zTRABDL7_P/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vTnyxJG3zA2qTY3X-vauJ1UzUJvF0Sw2QOPGtl87kQfRgX_wzdWiNlXVWnEzEeu52cyDexAVzxwXs32/pub?output=csv"),
      d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQShtZkq9ddHZl4CI9fnRBfjNwmveKiKzUCDvOEh2QJx3n1N9QpWrCW8Zu_2wI7w8psBxzwRPYgGGFs/pub?output=csv"),
      ])
      .then(([about, themes, projects]) => {
        const data = {about, themes, projects};
        console.log(data);

    // determine what page to render
    let params = new URLSearchParams(window.location.search);
    if (params.get('project')==null){
        MainPage(data);
    }else{
        let project = data.projects.find(d=>d.title===params.get('project'));
        Navbar('project')
        ProjectPage(project, about);
        hljs.highlightAll();
        lightGallery(document.getElementById('lightgallery'), {
            plugins: [lgZoom, lgThumbnail, lgVideo],
            speed: 500,
            thumbnail: true
        });
    } 
});




