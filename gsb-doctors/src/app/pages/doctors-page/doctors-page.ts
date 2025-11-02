import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../types/doctor.interface';
import { DoctorCard } from '../../components/doctor-card/doctor-card';
import { DoctorsService } from '../../services/doctors.service';

@Component({
  selector: 'app-doctors-page',
  standalone: true,
  imports: [CommonModule, DoctorCard],
  templateUrl: './doctors-page.html',
  styleUrl: './doctors-page.css',
})
export class DoctorsPageComponent implements OnInit {
  doctors = signal<Doctor[]>([]);

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit() {
    this.doctorsService.getDoctors().subscribe((doctors) => {
      this.doctors.set(doctors);
    });
  }
}