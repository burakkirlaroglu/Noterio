import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../appointments.service';
import { Appointment } from '../Appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {


  public errorMessage: string;
  public succesMsg: string;
  public appointmentDate: string;
  public district: string;
  public name: string;
  public email: string;
  public noterios: string;

  constructor(private appointmentService: AppointmentsService, private router: Router) { }


  // ngOnInit(): void {

  // }

  ngOnInit() {
    // this.createAppointment();
  }


  createAppointment() {
    this.errorMessage = '';
    this.succesMsg = '';
    this.appointmentService.createAppointment(this.appointmentDate, this.district, this.name, this.email, this.noterios)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.district = '';
        this.name = '';
        this.email = '';
        this.noterios= '';

        const appointmentDate = new Date(createdAppointment.appointmentDate).toDateString();
        this.succesMsg = `Appointment created succesfully :) for ${appointmentDate}`;
      },
        (error: ErrorEvent) => {
          this.errorMessage = error.error.message;
        }
      );
  }


  // changePage(){
  //   this.router.navigate([`/appointment-list`])
  // }

}
