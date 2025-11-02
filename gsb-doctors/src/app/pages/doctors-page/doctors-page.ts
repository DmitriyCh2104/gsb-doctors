import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DoctorsService } from '../../services/doctors.service';
import { Doctor } from '../../types/doctor.interface';

@Component({
  selector: 'app-doctors-page',  
  standalone: true,  
  imports: [CommonModule],  
  templateUrl: './doctors-page.html',  
  styleUrls: ['./doctors-page.css']
})
export class DoctorsPageComponent {
  private doctorsService = inject(DoctorsService);  
  
  doctors = toSignal(this.doctorsService.getDoctors(), {
    initialValue: [] as Doctor[]
  });
}