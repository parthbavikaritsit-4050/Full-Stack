class teacher{tech(){console.log("Teacher Teaches");}}
class student{study(){console.log("Student Studies");}}


function checkwork(animal:teacher|student){
    if(animal instanceof teacher){
       animal.tech();
        
    }
    
    if(animal instanceof student){
      animal.study();
        
    }
}

checkwork(new teacher);
checkwork(new student);
