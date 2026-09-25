# Correcciones para Documentos Legales - Kairos App

## Fecha de revisión: 7 de octubre de 2025

---

## 📋 RESUMEN EJECUTIVO

**Estado actual:** Documentos funcionales para aprobación de Apple, pero con inconsistencias y riesgos legales.

**Acción requerida:** Corregir 5 inconsistencias críticas y agregar 1 sección obligatoria para suscripciones.

**Tiempo estimado de corrección:** 30-45 minutos

---

## 🔴 CORRECCIONES CRÍTICAS

### 1. ELIMINAR: Mención de location tracking (Privacy Policy)

**Ubicación:** Sección "Information Collection and Use" o similar

**Texto actual (buscar y eliminar):**
```
- Device location
- Geolocation services
- Location data
```

**Razón:** Tu app NO recolecta ubicación GPS. Esto es una inconsistencia que viola las políticas de Apple y puede resultar en rechazo por "Privacy Policy incorrecta".

**Acción específica:**
1. Busca cualquier párrafo que mencione "location", "geolocation" o "ubicación"
2. Elimina completamente esas líneas
3. Si hay una lista de datos recolectados, asegúrate de que solo incluya:
   - Email (de Google Sign-In)
   - Nombre de usuario
   - Signo zodiacal
   - Historial de chat
   - Device IP address (para analytics)
   - Operating system version

---

### 2. ESPECIFICAR: Third-party services (Privacy Policy)

**Ubicación:** Sección "Third Party Access" o "Service Providers"

**Texto actual (vago):**
```
"The Service Provider may share your information with external services..."
```

**Reemplazar con texto específico:**
```
The Service Provider uses the following third-party services to provide and improve the application:

• Firebase (Google): For user authentication, data storage, and app functionality
  - Privacy Policy: https://firebase.google.com/support/privacy

• Google Sign-In: For secure authentication
  - Privacy Policy: https://policies.google.com/privacy

• Bugsnag: For crash reporting and performance monitoring
  - Privacy Policy: https://www.bugsnag.com/privacy-policy

These services may collect, process, and store information according to their respective privacy policies.
```

**Razón:** Transparencia requerida por GDPR y políticas de Apple. Los usuarios deben saber exactamente qué servicios procesan sus datos.

---

### 3. MODIFICAR: Cláusula de terminación del servicio (Terms & Conditions)

**Ubicación:** Sección "Termination" o "Service Availability"

**Texto actual (peligroso):**
```
"The Service Provider may wish to cease providing the application and may
terminate its use at any time without providing termination notice."
```

**Reemplazar con:**
```
Service Termination and Changes

The Service Provider may modify, suspend, or discontinue the application with
reasonable notice to users. In the event of service termination:

• Active subscribers will receive at least 30 days advance notice
• Active subscription periods will be honored until their natural expiration date
• No new charges will be applied after termination announcement
• Users may request refunds for unused subscription time through Apple's standard refund process

The Service Provider reserves the right to immediately terminate service in cases of:
• User violation of these terms
• Legal requirements
• Security concerns
```

**Razón:** La cláusula original te expone a demandas colectivas. Si tienes suscriptores pagando y cierras sin aviso, pueden exigir reembolsos masivos.

---

### 4. ELIMINAR/MODIFICAR: Marketing communications (Privacy Policy)

**Ubicación:** Sección "Communications" o "Contact Information"

**Texto actual:**
```
"The Service Provider may use the information you provided to contact you
with important notices and marketing promotions."
```

**Opción A - Si NO planeas hacer marketing (recomendado):**
```
"The Service Provider will only contact you for:
• Critical service updates and security notices
• Account-related notifications
• Responses to your support requests
• Legal or compliance notifications

We will never send promotional emails or sell your contact information."
```

**Opción B - Si SÍ planeas hacer marketing:**
```
"The Service Provider may contact you for:
• Service updates and new features
• Promotional offers (you can opt-out at any time)
• Account-related notifications

You can unsubscribe from promotional communications by clicking the 'unsubscribe'
link in any marketing email. Service-critical communications cannot be disabled."
```

**Razón:** Si prometes marketing pero no lo haces (o viceversa), violas tu propia política. Sé claro sobre tus intenciones.

---

### 5. AGREGAR: Sección completa de Subscriptions (Terms & Conditions)

**Ubicación:** Crear nueva sección después de "App Usage" o al inicio

**Texto completo a agregar:**

```markdown
## Subscription Terms

### Subscription Options
Kairos offers auto-renewable monthly subscriptions that provide access to premium features including:
• Unlimited AI coaching conversations
• Advanced daily message insights
• Personalized astrological guidance
• Ad-free experience

### Pricing and Payment
• Subscription price: [INSERTA PRECIO EXACTO] per month (prices may vary by region)
• Payment is charged to your Apple ID account at confirmation of purchase
• You can view current pricing in the app before subscribing

### Free Trial (if applicable)
• New subscribers may be eligible for a [X-day] free trial period
• You can cancel anytime during the trial period without being charged
• If you don't cancel before the trial ends, you will be automatically charged the subscription fee

### Automatic Renewal
• Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period
• Your account will be charged for renewal within 24 hours prior to the end of the current period
• Renewal charges will be at the same rate as your initial subscription, unless pricing changes are communicated in advance

### Managing Your Subscription
To cancel or manage your subscription:
1. Open the Settings app on your iOS device
2. Tap your name at the top
3. Tap Subscriptions
4. Select Kairos subscription
5. Tap Cancel Subscription

Alternatively, manage subscriptions through the App Store app:
1. Open App Store
2. Tap your profile icon
3. Tap Subscriptions
4. Select Kairos

### Refund Policy
• All subscription purchases are processed through the Apple App Store
• Refund requests must be submitted directly to Apple
• The Service Provider does not control Apple's refund decisions
• To request a refund: https://support.apple.com/en-us/HT204084
• Refunds are handled according to Apple's standard refund policy

### Changes to Subscription Terms
• We reserve the right to modify subscription pricing and features
• You will be notified of any price changes before they take effect
• Price changes will not affect your current subscription period
• Continued use after notification constitutes acceptance of new terms

### Subscription Termination
If you cancel your subscription:
• You will retain access to premium features until the end of your current billing period
• No partial refunds are provided for unused time in the current period
• Your subscription will not renew, and you will lose access to premium features at the end of the period
• Your account and data will be preserved; you can resubscribe at any time
```

**IMPORTANTE:** Reemplaza `[INSERTA PRECIO EXACTO]` con el precio real (ejemplo: "$4.99 USD")

**Razón:** Apple EXIGE que los términos de suscripción estén explícitamente documentados. Sin esto, tu app puede ser rechazada nuevamente.

---

## ⚠️ CORRECCIONES RECOMENDADAS (No críticas pero importantes)

### 6. Agregar edad mínima clara (Privacy Policy)

**Ubicación:** Al inicio del documento o en "Eligibility"

**Agregar:**
```
## Age Restrictions

This app is intended for users aged 16 and older. We do not knowingly collect
personal information from children under 16. If you are a parent or guardian
and believe your child has provided us with personal information, please
contact us at [EMAIL] and we will delete such information.
```

---

### 7. Clarificar data retention (Privacy Policy)

**Ubicación:** Crear nueva sección o agregar a "Data Storage"

**Agregar:**
```
## Data Retention and Deletion

• Active account data is retained while your account is active
• You can request complete account deletion by contacting [EMAIL]
• Upon deletion request, we will remove all personal data within 30 days
• Anonymized analytics data may be retained for service improvement
• Legal obligations may require retention of certain transaction records
```

---

### 8. Contact information (Ambos documentos)

**Verificar que incluyas:**
```
## Contact Us

For questions about this [Privacy Policy / Terms & Conditions]:

Developer: Rodrigo Oliva
Email: [TU EMAIL DE SOPORTE]
Website: https://rodx.dev

For App Store related issues:
• Manage subscriptions through iOS Settings
• Request refunds through Apple Support
```

**ACCIÓN:** Reemplaza `[TU EMAIL DE SOPORTE]` con un email válido donde recibirás consultas.

---

## 📝 CHECKLIST DE IMPLEMENTACIÓN

Usa esta lista para verificar que completaste todas las correcciones:

### Privacy Policy (kairos-policy.html)
- [ ] ❌ Eliminé todas las menciones de "location tracking"
- [ ] ✏️ Especifiqué los servicios de terceros (Firebase, Google, Bugsnag)
- [ ] ✏️ Clarifiqué la política de comunicaciones (marketing o no marketing)
- [ ] ✅ Agregué sección de edad mínima (16+)
- [ ] ✅ Agregué sección de retención y eliminación de datos
- [ ] ✅ Verifiqué que el email de contacto sea correcto

### Terms & Conditions (kairos-terms.html)
- [ ] ✏️ Modifiqué la cláusula de terminación del servicio (30 días de aviso)
- [ ] 🔴 Agregué la sección completa de "Subscription Terms" (CRÍTICO)
- [ ] ✅ Verifiqué que el precio de suscripción esté correcto
- [ ] ✅ Verifiqué que el email de contacto sea correcto

### Verificación final
- [ ] Ambos documentos mencionan "Rodrigo Oliva" como desarrollador
- [ ] Ambos documentos mencionan "Kairos - Mensajes del destino"
- [ ] Fecha efectiva es octubre 2025 (o fecha de lanzamiento)
- [ ] URLs siguen siendo accesibles: https://rodx.dev/terms-app/kairos-*.html

---

## 🎯 PRIORIDAD DE CORRECCIONES

Si tienes tiempo limitado, corrige en este orden:

1. **CRÍTICO (obligatorio para Apple):**
   - ✅ Agregar sección de Subscription Terms (Terms & Conditions)
   - ✅ Eliminar location tracking (Privacy Policy)

2. **MUY IMPORTANTE (protección legal):**
   - ✅ Modificar cláusula de terminación (Terms & Conditions)
   - ✅ Especificar third-party services (Privacy Policy)

3. **IMPORTANTE (buenas prácticas):**
   - ✅ Clarificar marketing communications
   - ✅ Agregar data retention policy

4. **RECOMENDADO:**
   - Edad mínima
   - Contact info actualizado

---

## 📱 DESPUÉS DE CORREGIR LOS DOCUMENTOS

Una vez que hayas actualizado los archivos HTML y los hayas vuelto a subir a https://rodx.dev/terms-app/:

1. **Verifica que las URLs sigan funcionando:**
   - https://rodx.dev/terms-app/kairos-terms.html
   - https://rodx.dev/terms-app/kairos-policy.html

2. **Notifícame para continuar con:**
   - Implementar los enlaces en la app (PaywallView)
   - Actualizar App Store Connect con las URLs
   - Preparar la nueva build para Apple

---

## ❓ PREGUNTAS FRECUENTES

**P: ¿Puedo usar estos documentos sin consultar un abogado?**
R: Para una app indie pequeña, estos documentos son suficientes para Apple. Si planeas escalar o tienes presupuesto, siempre es mejor consultar un abogado especializado en tech.

**P: ¿Qué pasa si cambio el precio de la suscripción después?**
R: Debes actualizar los Terms & Conditions y notificar a los usuarios existentes antes de que se les cobre el nuevo precio.

**P: ¿Debo traducir estos documentos al español?**
R: No es obligatorio para Apple, pero es muy recomendado si tu app está en español. Puedes tener versiones en ambos idiomas.

**P: ¿Con qué frecuencia debo revisar estos documentos?**
R: Revisa cuando:
- Agregues nuevos third-party services
- Cambies el modelo de negocio
- Cambien las leyes de privacidad (GDPR updates, etc.)
- Apple actualice sus requisitos

---

## 📞 INFORMACIÓN DE CONTACTO PARA EL DOCUMENTO

**Necesitas decidir:**
- Email de soporte: ¿Cuál usarás para consultas de usuarios?
  - Sugerencia: support@rodx.dev o un email específico para Kairos

**Este email debe:**
- Ser monitoreado regularmente
- Responder a consultas de privacidad en máximo 30 días (requisito GDPR)
- Manejar solicitudes de eliminación de datos

---

## ✅ CONFIRMACIÓN FINAL

Después de hacer todas las correcciones, confirma que:

1. ✅ Los archivos HTML están actualizados en tu servidor
2. ✅ Las URLs son accesibles desde cualquier navegador
3. ✅ El contenido se ve correctamente en móvil (los usuarios iOS los verán en Safari)
4. ✅ No hay errores HTML (puedes validar en https://validator.w3.org/)

**Cuando termines, avísame y continuaré con la implementación en la app.**
