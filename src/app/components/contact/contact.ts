import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})

export class ContactComponent implements OnInit {
  formData = {
    nom: '',
    email: '',
    objet: '',
    message: ''
  };

  isSubmitting = false;
  showSuccess = false;
  showError = false;

  ngOnInit() {
    emailjs.init('UtN6D7XDRbMqWPAiY');
  }

  async onSubmit() {
    if (!this.formData.nom || !this.formData.email || !this.formData.objet || !this.formData.message) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;

    try {
      const templateParams = {
        from_name: this.formData.nom,
        from_email: this.formData.email,
        subject: this.formData.objet,
        message: this.formData.message,
        to_email: 'lou.debaere62@gmail.com'
      };

      const response = await emailjs.send(
        'service_45ox34o',
        'template_kzwu7a5',
        templateParams
      );

      if (response.status === 200) {
        this.showSuccess = true;
        this.resetForm();
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
      } else {
        this.showError = true;
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
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