function compute(){
   var i1,i2,i3,i4,i5,i6,i7,i8,e1,e2,e3,e4,e5,e6,e7,e8,c1,c2,c3,c4,c5,c6,c7,c8,ea1,ea2,ea3,ea4,ea5,ea6,ea7,ea8;
   i1=Number(document.getElementById("i1").value);
   i2=Number(document.getElementById("i2").value);
   i3=Number(document.getElementById("i3").value);
   i4=Number(document.getElementById("i4").value);
   i5=Number(document.getElementById("i5").value);
   i6=Number(document.getElementById("i6").value);
   i7=Number(document.getElementById("i7").value);
   i8=Number(document.getElementById("i8").value);
   e1=Number(document.getElementById("e1").value);
   e2=Number(document.getElementById("e2").value);
   e3=Number(document.getElementById("e3").value);
   e4=Number(document.getElementById("e4").value);
   e5=Number(document.getElementById("e5").value);
   e6=Number(document.getElementById("e6").value);
   e7=Number(document.getElementById("e7").value);
   e8=Number(document.getElementById("e8").value);
   c1=Number(document.getElementById("c1").value);
   c2=Number(document.getElementById("c2").value);
   c3=Number(document.getElementById("c3").value);
   c4=Number(document.getElementById("c4").value);
   c5=Number(document.getElementById("c5").value);
   c6=Number(document.getElementById("c6").value);
   c7=Number(document.getElementById("c7").value);
   c8=Number(document.getElementById("c8").value);
   console.log( typeof(i1),i1,i2,i3,i4,i5,i6,i7,i8,e1,e2,e3,e4,e5,e6,e7,e8,c1,c2,c3,c4,c5,c6,c7,c8);
   if(i1<0||i2<0||i3<0||i4<0||i5<0||i6<0||i8<0||i7<0||i1>50||i2>50||i3>50||i4>50||i5>50||i6>50||i8>50||i7>50||i1==""||i2==""||i3==""||i4==""||i5==""||i6==""||i7==""||i8==""){
       alert("INTTERNAL MARKS RANGE MUST BE 0 TO 50");return;
   }
   if(e1<0||e2<0||e3<0||e4<0||e5<0||e6<0||e8<0||e7<0||e1>100||e2>100||e3>100||e4>100||e5>100||e6>100||e8>100||e7>100||e1==""||e2==""||e3==""||e4==""||e5==""||e6==""||e7==""||e8==""){
    alert("INTTERNAL MARKS RANGE MUST BE 0 TO 100");return;
    }
    if(c1<0||c2<0||c3<0||c4<0||c5<0||c6<0||c8<0||c7<0||c8<0||c1==""||c2==""||c3==""||c4==""||c5==""||c6==""||c7==""||c8==""){
        alert("ENTER ALL SUBJECTS CREDITS");return;
    }
    ea1=c1;
    ea2=c2;
    ea3=c3;
    ea4=c4;
    ea5=c5;
    ea6=c6;
    ea7=c7;
    ea8=c8;
    if(i1<20||e1<40){
        ea1=0;
    }if(i2<20||e2<40){
        ea2=0;
    }if(i3<20||e3<40){
        ea3=0;
    }if(i1<20||e1<40){
        ea1=0;
    }if(i4<20||e4<40){
        ea4=0;
    }if(i5<20||e5<40){
        ea5=0;
    }if(i6<20||e6<40){
        ea6=0;
    }if(i7<20||e7<40){
        ea7=0;
    }if(i8<20||e8<40){
        ea8=0;
    }var i=0;
    document.getElementById("ea1").value=ea1;
    document.getElementById("ea2").value=ea2;
    document.getElementById("ea3").value=ea3;
    document.getElementById("ea4").value=ea4;
    document.getElementById("ea5").value=ea5;
    document.getElementById("ea6").value=ea6;
    document.getElementById("ea7").value=ea7;
    document.getElementById("ea8").value=ea8;
    var grade=["F","F","F","F","F","F","F","F",];
    var gpa=[0,0,0,0,0,0,0,0];
    gpa[0]=parseInt((i1+parseInt(e1/2))/10)+1;
    gpa[1]=(parseInt(((i2+parseInt(e2/2))/10)))+1;
    gpa[2]=(parseInt(((i3+parseInt(e3/2))/10)))+1;
    gpa[3]=(parseInt(((i4+parseInt(e4/2))/10)))+1;
    gpa[4]=(parseInt(((i5+parseInt(e5/2))/10)))+1;
    gpa[5]=(parseInt(((i6+parseInt(e6/2))/10)))+1;
    gpa[6]=(parseInt(((i7+parseInt(e7/2))/10)))+1;
    gpa[7]=(parseInt(((i8+parseInt(e8/2))/10)))+1;
    for(i=0;i<8;i++){
        if(gpa[i]==11)
        gpa[i]=10;
        if(gpa[i]==5)
        gpa[i]=4;
    }
    for(i=0;i<8;i++){
        switch(gpa[i]){
            case 10: grade[i]="S";break;
            case 9:grade[i]="A";break;
            case 8:grade[i]="B";break;
            case 7:grade[i]="C";break;
            case 6:grade[i]="D";break;
            case 5:grade[i]="E";break;
            default:grade[i]="F";break;
        }
    }
    console.log(gpa);
    console.log(grade);
    if(ea1==0){ grade[0]="F"; gpa[0]=0;}
    if(ea2==0){ grade[1]="F"; gpa[1]=0;}
    if(ea3==0){ grade[2]="F"; gpa[2]=0;}
    if(ea4==0){ grade[3]="F"; gpa[3]=0;}
    if(ea5==0){ grade[4]="F"; gpa[4]=0;}
    if(ea6==0){ grade[5]="F"; gpa[5]=0;}
    if(ea7==0){ grade[6]="F"; gpa[6]=0;}
    if(ea8==0){ grade[7]="F"; gpa[7]=0;}
    document.getElementById("g1").value=grade[0];
    document.getElementById("g2").value=grade[1];
    document.getElementById("g3").value=grade[2];
    document.getElementById("g4").value=grade[3];
    document.getElementById("g5").value=grade[4];
    document.getElementById("g6").value=grade[5];
    document.getElementById("g7").value=grade[6];
    document.getElementById("g8").value=grade[7];
    var sgpa=(gpa[0]*ea1+gpa[1]*ea2+gpa[2]*ea3+gpa[3]*ea4+gpa[4]*ea5+gpa[5]*ea6+gpa[6]*ea7+gpa[7]*ea8)/(c1+c2+c3+c4+c5+c6+c7+c8);
     console.log(sgpa);
     document.getElementById("sg").innerHTML=sgpa.toPrecision(3);
     document.getElementById("sgpa").style.backgroundColor="pink"; 
     if(ea1==0||ea2==0||ea3==0||ea4==0||ea5==0||ea6==0||ea7==0||ea8==0){
        document.getElementById("re").innerHTML="F"
        document.getElementById("result").style.backgroundColor="tomato"; 
        return;
     }
     if(sgpa>=7.75){
        document.getElementById("re").innerHTML="FCD"
        document.getElementById("result").style.backgroundColor='#56ee56'; 
     } 
     else if(sgpa>=6.75&&sgpa<7.75){
        document.getElementById("re").innerHTML="FC"
        document.getElementById("result").style.backgroundColor="#4a4de4e8"; 
         }
     else if(sgpa<6.75){
        document.getElementById("re").innerHTML="SC"
        document.getElementById("result").style.backgroundColor="#fffb14fa"; 
     }
}
function myFunction() {
    document.getElementById("re").innerHTML="R";
    document.getElementById("result").style.backgroundColor="wheat";
    document.getElementById("sg").innerHTML="0.0";
    document.getElementById("sgpa").style.backgroundColor="wheat"; 
     
 
}
