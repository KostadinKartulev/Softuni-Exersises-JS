function search() {
   let townElelements=document.querySelectorAll('#towns li');
   let searchedElement=document.getElementById('searchText');

   let pattern=searchedElement.value;
   let regex=new RegExp(pattern);

   let countMatches=0;
   for (let el of townElelements) {
     if(regex.test(el.textContent)){
      el.style.fontWeight='bold';
      el.style.textDecoration='underline';
      countMatches++;
     }
   }
   let numOfMatchesElement=document.getElementById('result');
   numOfMatchesElement.textContent=`${countMatches} matches found`;
}
