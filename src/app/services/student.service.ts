import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Edwin Antonio Arellano Mata',
      controlnumer: '16400882',
      active: true
    });
    this.students.push({
      name: 'Miguel Leopoldo Arciniega Ramirez',
      controlnumer: '16400881',
      active: true
    });
    this.students.push({
      name: 'Adriana Flores Ramirez',
      controlnumer: '16400903',
      active: false
    });
  }

  getStudents(): Student[]{
    return this.students;
  }

  changeStatus(position: number): void{
    this.students[position].active = !this.students[position].active;
  }

  deleteStudent(position: number): void{
    this.students.splice(position, 1);
  }

  newStudent(student: Student): void{
    this.students.push(student);
  }
}

// Para aplicar MVC
// Hacer primero el modelo -> ionic g class models/student --type=model
// Desupes el controlador -> ionic g service services/student
// Por ultimo la vista -> archivo home.page.ts
