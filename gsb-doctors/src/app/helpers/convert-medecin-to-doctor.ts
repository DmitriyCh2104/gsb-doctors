import { Medecin } from '../types/medecin.interface';
import { Doctor } from '../types/doctor.interface';

      
export function convertMedecinToDoctor(medecin: Medecin): Doctor {
  return {
    id: medecin.id,
    firstName: medecin.prenom, 
    lastName: medecin.nom,    
    email: medecin.email,
    speciality: medecin.specialite, 
    address: medecin.adresse,     
  };
}