export const scrollIntoView = element => {
    let elem = document.getElementById(element);
    let headerOffset = 80;
    let elementPosition = elem.getBoundingClientRect().top;
    let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
};