import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-d',
  imports: [FormsModule],
  templateUrl: './to-d.component.html',
  styleUrl: './to-d.component.css'
})
export class ToDComponent {
  title ='TO Do Appllication';
  imageLink:string ='https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_640.png'
  tasks:string[] = [];
  newTask:string='';
  isAvailable: boolean = false;
  addTask(){
    if(this.newTask!==''){
      this.tasks.push(this.newTask.trim())
      this.newTask=''
      this.isAvailable= true;

    }
    console.log(this.tasks);
    

  }
  editIndex: number | null = null; // لتخزين رقم التصق اللي بيتم التعديل 
  isEditMode:boolean = false;

editTtask(index: number): void {
  this.editIndex = index; // تخزين رقم التصق
  this.newTask = this.tasks[index]; // جلب النص الخاص بالتصق للـInput
  this.isEditMode = true;
}

saveTask(): void {
  
  const trimmedTask = this.newTask.trim();
  if (this.editIndex !== null && trimmedTask !== '') {
    this.tasks[this.editIndex] = trimmedTask; // تعديل التصق
    this.editIndex = null; // إلغاء وضع التعديل
    this.newTask = ''; // تفريغ الـInput
    this.isEditMode = false;
  }else{
    this.newTask = '';

  }
  

}
  // editTask(index:number){
  //   let updatedTask = prompt("Edit task",this.tasks[index])
  //   if(updatedTask!== null){
  //     this.tasks[index]=updatedTask.trim()

  //   }

  // }
  removTask(index:number){
    this.tasks.splice(index,1)
    this.isAvailable= this.tasks.length > 0

  }
  
  editTask(index: number, newtaskEdit: string): string | void {
    const trimmedTask = newtaskEdit.trim();
    if (trimmedTask !== '') {
 
      this.tasks[index] = trimmedTask;
    } else {
      
      return this.newTask = this.tasks[index];
    }
    this.newTask = ''; 
 
}
}
  


  // // }
  // editTask(index: number, newTaskEdit: string): string | void {
  //   const trimmedTask = newTaskEdit.trim(); // تصحيح الاسم
  //   if (trimmedTask !== '') {
  //     // تحقق من صحة index
  //     if (index >= 0 && index < this.tasks.length) {
  //       this.tasks[index] = trimmedTask; // تعديل المهمة
  //     } else {
  //       throw new Error('Index out of range'); // خطأ إذا كان الفهرس غير صالح
  //     }
  //     this.newTask = ''; // تصفية الحقل
  //   } else {
  //     if (index >= 0 && index < this.tasks.length) {
  //       this.newTask = this.tasks[index]; // استعادة المهمة الأصلية
  //       return this.newTask;
  //     } else {
  //       throw new Error('Index out of range'); // خطأ إذا كان الفهرس غير صالح
  //     }
  //   }
  // }
  


