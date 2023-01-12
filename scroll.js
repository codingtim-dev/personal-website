isChange = false;

window.addEventListener("scroll", changeTheme)
const cards = document.getElementsByClassName("card");





function changeTheme(){
    const projectsPosition = document.getElementById("projects").getBoundingClientRect();

    

    if(projectsPosition.top < window.innerHeight && projectsPosition.bottom >= 0){

        const project = document.getElementById("projects");
        project.classList.add("black-theme")
        isChange= true

        for(const card of cards){
            card.classList.add("unreveal");
        }
    }else{
        for(const card of cards){
            card.classList.remove("unreveal");

        }
    }

    if(document.getElementById("photography2").getBoundingClientRect().top < window.innerHeight && document.getElementById("photography2").getBoundingClientRect().bottom >= 0){
        document.getElementById("unreveal-block").classList.add("unreveal-block");
        
    }else{
        document.getElementById("unreveal-block").classList.remove("unreveal-block");
        
    }


    if(document.getElementById("photography").getBoundingClientRect().top < window.innerHeight && document.getElementById("photography").getBoundingClientRect().bottom >= 0){
        document.getElementById("photography-text").classList.add("typewriterPhotography");
        document.getElementById("photography-text").classList.add("thick");
    }else{
        document.getElementById("photography-text").classList.remove("typewriterPhotography");
        document.getElementById("photography-text").classList.remove("thick");
    }

    
}