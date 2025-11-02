import { Component, Input } from '@angular/core';
import { Doctor } from '../../types/doctor.interface';

@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [],
  templateUrl: './doctor-card.html',
  styleUrl: './doctor-card.css',
})
export class DoctorCard {
  @Input() doctor!: Doctor;
}