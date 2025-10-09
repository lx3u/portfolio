import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class ContactComponent {
  formData = {
    nom: '',
    email: '',
    objet: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  async onSubmit() {
    if (!this.formData.nom || !this.formData.email || !this.formData.objet || !this.formData.message) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;

    try {
      // Configuration EmailJS - À REMPLACER avec tes vraies clés
      const serviceID = 'TON_SERVICE_ID';
      const templateID = 'TON_TEMPLATE_ID';
      const publicKey = 'TA_CLE_PUBLIQUE';

      const templateParams = {
        from_name: this.formData.nom,
        from_email: this.formData.email,
        subject: this.formData.objet,
        message: this.formData.message
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceID,
          template_id: templateID,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      if (response.ok) {
        this.showSuccess = true;
        this.resetForm();
      } else {
        this.showError = true;
      }
    } catch (error) {
      console.error('Erreur:', error);
      this.showError = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.formData = {
      nom: '',
      email: '',
      objet: '',
      message: ''
    };
  }
}
