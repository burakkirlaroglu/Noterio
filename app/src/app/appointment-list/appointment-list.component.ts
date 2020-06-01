import { Component, OnInit } from "@angular/core";
import { Appointment } from "../Appointment";
import { AppointmentsService } from "../appointments.service";
import { mergeMap } from "rxjs/operators";

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"]
})
export class AppointmentListComponent implements OnInit {
  public loading = true;
  public errorMessage: string;
  public succesMsg: string;
  public appointments: Appointment[];
  public columns = ["appointmentDate", "district", "name", "email", "noterio", "cancel"];

  constructor (private appointmentService: AppointmentsService) { }

  // ngOnInit(): void {
  //    this.getAppointment();
  // }

  ngOnInit () {
    this.getAppointment();
  }

  getAppointment () {
    this.appointmentService.getAppointments()
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.loading = false;
      }, (error: ErrorEvent) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      });
  }

  cancelAppointment (id: string) {
    this.appointmentService.cancelAppointment(id)
      .pipe(
        mergeMap(() => this.appointmentService.getAppointments())
      )
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.succesMsg = "Succesfully cancelled the appointment";
      },
      (error: ErrorEvent) => {
        this.errorMessage = error.error.message;
        this.loading = false;
      });
  }
}
