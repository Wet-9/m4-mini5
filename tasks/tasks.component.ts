import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; // Initialize as an empty array

  constructor(private service: TasksServiceService) {}

  ngOnInit() {
    this.service.getTasks().subscribe((result: any) => {
      this.tasks = result.tasks;
    });
  }

}
