console.log("bonh s")
console.log(document.getElementsByClassName("reveal"))
const ratio=.1
const options={
    root:null,
    rootMargin:'0px',
    threshold:ratio
}

const handledIntersect=function(entries,observer){
    entries.forEach(function(entry) {
        if(entry>ratio){
            console.log("visible")
        }else{
            console.log("invisible")
        }
    });
}

const observer=new IntersectionObserver(handledIntersect,options)
