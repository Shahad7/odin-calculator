let text,operand1,flag1=0,operand2,operation,flag2=0,flag3=0;
const display = document.querySelector('.display');
let displayContent = document.createElement('span');
display.appendChild(displayContent);
displayContent.textContent = 0;

const buttons = document.querySelectorAll('.value')
buttons.forEach((button)=>{

button.addEventListener('click',()=>{
   if(displayContent.textContent==0)
      displayContent.textContent='';
   if(displayContent.textContent.length>15)
      displayContent.textContent = Number(displayContent.textContent).toExponential();
   if(!flag3)
   {
      text = button.getAttribute('data-key');
      displayContent.textContent+= text
   }
   else{
      text = button.getAttribute('data-key');
      displayContent.textContent = text;
      flag3=0;
   }
})})

const operations = document.querySelectorAll('.op');
operations.forEach((op)=>{
   op.addEventListener('click',()=>{
      if(!flag1)
      {
         operand1 = Number(displayContent.textContent);
         flag1=1;
         flag3=1;
         operation = op.getAttribute('data-key');
      }
      else{
         operate();
         operand1 = Number(displayContent.textContent);
         flag1=1;
         operation = op.getAttribute('data-key');
         flag3=1;
      }

   })
})

const final = document.querySelector('#equalTo');
final.addEventListener('click',operate);

function operate(){
   if(!operation){
      return;
   }
   operand2 = Number(displayContent.textContent);
   if(operation=='+')
      operand1 = operand1 + operand2;
   else if(operation=='-')
      operand1 = operand1 - operand2;
   else if(operation=='*')
      operand1 = operand1 * operand2;
   else if(operation=='/')
   { 
      if(operand2==0){
         displayContent.textContent = 'Error: Division by zero!';
         return;
      }
      else
         operand1 = operand1 / operand2;
   }
   displayContent.textContent = operand1;
   operand1=0;
   operand2=0;
   flag1=0;
   flag2=0;
}

function clearAll(){
   flag1=0;
   flag2=0;
   flag3=0;
   operand1=0;
   operand2=0;
   operation='';
   displayContent.textContent=0;
}

function deleteIt(){
   displayContent.textContent = displayContent.textContent.substring(0,displayContent.textContent.length-1);
}

const clear =  document.querySelector('#clear');
clear.addEventListener('click',clearAll);

const del = document.querySelector('#del');
del.addEventListener('click',deleteIt);