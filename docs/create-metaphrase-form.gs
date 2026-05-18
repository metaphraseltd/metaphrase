/**
 * METAPHRASE LTD — Freelance Linguist Application Form
 * =====================================================
 * HOW TO USE:
 * 1. Go to script.google.com
 * 2. Click "New Project"
 * 3. Delete any existing code in the editor
 * 4. Paste this entire script
 * 5. Click the floppy disk icon (Save)
 * 6. Click Run (▶ play button)
 * 7. Google will ask for permissions — click "Review permissions" → choose your account → click "Advanced" → "Go to project" → Allow
 * 8. The script runs in seconds. Check your Google Drive — the form will be there.
 * 9. Open the form, click Send → link icon → copy the shareable link
 * 10. Click Send → embed icon (</>) → copy the iframe code → send it to your web developer
 * =====================================================
 */

function createMetaphraseRecruitmentForm() {

  // ── Create the form ──────────────────────────────────────────────────────
  var form = FormApp.create('Freelance Linguist Application — Metaphrase Ltd');

  form.setDescription(
    'Thank you for your interest in joining Metaphrase Ltd as a freelance translator or interpreter.\n\n' +
    'Please complete all sections accurately and honestly. We aim to respond to all applications within 5 working days.\n\n' +
    'Metaphrase Ltd is a CIOL-accredited UK translation and interpreting agency based in Birmingham. We hold £1M Professional Indemnity insurance and are committed to the highest professional standards.\n\n' +
    'This form takes approximately 10–15 minutes to complete.'
  );

  form.setCollectEmail(false); // We collect email manually in Section 1
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setShowLinkToRespondAgain(false);

  form.setConfirmationMessage(
    'Thank you for applying to join the Metaphrase Ltd linguist network.\n\n' +
    'We have received your application and will review it carefully. ' +
    'If your profile matches our current requirements, we will contact you within 5 working days to arrange a short video call.\n\n' +
    'Metaphrase Ltd — Certified. Precise. Trusted.\n' +
    'metaphrase.uk'
  );


  // ════════════════════════════════════════════════════════════
  // SECTION 1 — PERSONAL DETAILS
  // ════════════════════════════════════════════════════════════
  form.addSectionHeaderItem()
    .setTitle('Section 1 — Personal Details')
    .setHelpText('Please provide your personal and contact information.');

  form.addTextItem()
    .setTitle('Full name')
    .setHelpText('First name and last name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Email address')
    .setHelpText('We will use this to contact you about your application')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Mobile phone number')
    .setHelpText('Include country code if outside UK, e.g. +44 7xxx xxx xxx')
    .setRequired(true);

  form.addTextItem()
    .setTitle('City or town you are based in')
    .setHelpText('e.g. Birmingham, Manchester, London')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Are you currently based in the United Kingdom?')
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);


  // ════════════════════════════════════════════════════════════
  // SECTION 2 — LANGUAGE PAIRS
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 2 — Language Pairs')
    .setHelpText('Tell us which languages you work with.');

  var languageList = [
    'Arabic', 'Albanian', 'Bengali', 'Bulgarian', 'Chinese (Mandarin)',
    'Chinese (Cantonese)', 'Croatian', 'Czech', 'Dari', 'Dutch',
    'Farsi / Persian', 'French', 'German', 'Gujarati', 'Hindi',
    'Hungarian', 'Italian', 'Kurdish (Kurmanji)', 'Kurdish (Sorani)',
    'Lithuanian', 'Pashto', 'Polish', 'Portuguese', 'Punjabi',
    'Romanian', 'Russian', 'Serbian', 'Somali', 'Spanish',
    'Swahili', 'Tamil', 'Tigrinya', 'Turkish', 'Ukrainian',
    'Urdu', 'Other — please specify below'
  ];

  form.addCheckboxItem()
    .setTitle('I translate or interpret FROM these languages')
    .setHelpText('Tick all that apply — these are your source languages')
    .setChoiceValues(languageList)
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('I translate or interpret INTO these languages')
    .setHelpText('Tick all that apply — these are your target languages')
    .setChoiceValues(languageList)
    .setRequired(true);

  form.addTextItem()
    .setTitle('If you selected "Other" above, please specify your language(s)')
    .setHelpText('Leave blank if not applicable')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Which direction(s) do you work in?')
    .setChoiceValues([
      'Into English only (from my native language)',
      'Into my native language only (from English)',
      'Both directions equally',
      'Depends on the language pair'
    ])
    .setRequired(true);


  // ════════════════════════════════════════════════════════════
  // SECTION 3 — SERVICES OFFERED
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 3 — Services Offered')
    .setHelpText('Tell us what type of work you do.');

  form.addCheckboxItem()
    .setTitle('Which services do you offer?')
    .setHelpText('Tick all that apply')
    .setChoiceValues([
      'Written translation (documents)',
      'Face-to-face interpreting',
      'Telephone interpreting',
      'Video remote interpreting (VRI / online)',
      'Certified / sworn translation',
      'Proofreading and editing',
      'Transcription',
      'Subtitling or captioning'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Which settings have you worked in?')
    .setHelpText('Tick all that apply')
    .setChoiceValues([
      'Crown Court / Magistrates Court',
      'Immigration tribunal / asylum hearings',
      'NHS hospitals or GP surgeries',
      'Social services or safeguarding',
      'Police interviews',
      'Solicitors or law firms',
      'Business meetings or conferences',
      'Schools or educational settings',
      'Housing or local authority',
      'None of the above — I am new to the sector'
    ])
    .setRequired(true);


  // ════════════════════════════════════════════════════════════
  // SECTION 4 — QUALIFICATIONS
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 4 — Qualifications & Memberships')
    .setHelpText('Please be accurate — we verify all qualifications.');

  form.addListItem()
    .setTitle('Highest relevant qualification')
    .setChoiceValues([
      'CIOL Fellow (FCIL)',
      'CIOL Member (MCIL)',
      'CIOL Associate (ACIL)',
      'ITI Full Member',
      'ITI Associate Member',
      'DPSI — Legal option',
      'DPSI — Health option',
      'DPSI — Local Government option',
      'MA or MSc in Translation',
      'MA or MSc in Interpreting',
      'Postgraduate Diploma in Translation',
      'Degree in Languages or Linguistics',
      'Community Interpreting Certificate (CiLT or equivalent)',
      'Other professional qualification — please describe below',
      'No formal qualification — experience only'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('CIOL or ITI membership number')
    .setHelpText('Leave blank if not applicable. We verify all memberships.')
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('Are you registered with NRPSI (National Register of Public Service Interpreters)?')
    .setChoiceValues(['Yes — full registration', 'Applied — awaiting registration', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Do you hold a current DBS certificate?')
    .setChoiceValues([
      'Yes — Enhanced DBS',
      'Yes — Basic DBS',
      'Applied — awaiting result',
      'No'
    ])
    .setRequired(true);

  form.addTextItem()
    .setTitle('If DBS checked, what was the date of your most recent check?')
    .setHelpText('Format: MM/YYYY — Leave blank if not applicable')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('Please describe any other relevant qualifications, training, or certifications')
    .setHelpText('Include any short courses, specialist training (e.g. medical terminology, legal interpreter training), or other relevant credentials')
    .setRequired(false);


  // ════════════════════════════════════════════════════════════
  // SECTION 5 — EXPERIENCE
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 5 — Professional Experience')
    .setHelpText('Tell us about your background and specialist areas.');

  form.addListItem()
    .setTitle('How many years of professional translation or interpreting experience do you have?')
    .setChoiceValues([
      'Less than 1 year',
      '1–2 years',
      '3–5 years',
      '6–10 years',
      'More than 10 years'
    ])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Your specialist subject areas')
    .setHelpText('Tick all areas where you have genuine experience — do not tick areas you are not confident in')
    .setChoiceValues([
      'Legal — courts and tribunals',
      'Legal — solicitors and contracts',
      'Immigration and asylum',
      'Medical — NHS hospitals and clinics',
      'Mental health',
      'Social services and safeguarding',
      'Police and criminal justice',
      'Business and finance',
      'Technical and engineering',
      'Academic and research',
      'Education and schools',
      'Media and marketing',
      'IT and technology',
      'General / no specialism'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Please list 2–3 organisations, agencies, or clients you have worked with as a translator or interpreter')
    .setHelpText('Include approximate dates. You do not need to name confidential clients — you can say "NHS Trust" or "Immigration solicitor" without naming them.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('In 2–3 sentences, describe your most challenging assignment and how you handled it')
    .setHelpText('This helps us understand how you perform under pressure. There is no right or wrong answer.')
    .setRequired(true);


  // ════════════════════════════════════════════════════════════
  // SECTION 6 — RATES
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 6 — Your Rates')
    .setHelpText('Please provide your preferred rates. These are starting points for discussion — we discuss final rates during the interview.');

  form.addTextItem()
    .setTitle('Your rate for written translation (per word)')
    .setHelpText('e.g. £0.12 — Enter N/A if you do not offer translation')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Your rate for face-to-face interpreting (per hour)')
    .setHelpText('e.g. £35 — Enter N/A if you do not offer this service')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Your rate for telephone or video interpreting (per hour)')
    .setHelpText('e.g. £25 — Enter N/A if you do not offer this service')
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Are you willing to negotiate rates on volume or ongoing work?')
    .setChoiceValues(['Yes', 'No', 'Depends on the work'])
    .setRequired(true);


  // ════════════════════════════════════════════════════════════
  // SECTION 7 — AVAILABILITY
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 7 — Availability')
    .setHelpText('Help us understand when and how you can work.');

  form.addMultipleChoiceItem()
    .setTitle('Are you available for urgent same-day assignments?')
    .setChoiceValues(['Yes — regularly', 'Sometimes — depends on my schedule', 'No'])
    .setRequired(true);

  form.addCheckboxItem()
    .setTitle('Days you are generally available')
    .setHelpText('Tick all that apply')
    .setChoiceValues(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Are you available for evening assignments (after 6pm)?')
    .setChoiceValues(['Yes', 'Sometimes', 'No'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Can you travel to courts, hospitals, or offices in your region for face-to-face work?')
    .setChoiceValues([
      'Yes — I can travel within my region',
      'Yes — I can travel nationally if expenses are covered',
      'Limited — I prefer remote work only',
      'No — I only work remotely'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Are you also available for remote / telephone / video interpreting?')
    .setChoiceValues(['Yes', 'No'])
    .setRequired(true);


  // ════════════════════════════════════════════════════════════
  // SECTION 8 — SELF-EMPLOYMENT STATUS
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 8 — Self-Employment & Legal Status')
    .setHelpText('Metaphrase Ltd engages all linguists as self-employed contractors. Please confirm your status.');

  form.addMultipleChoiceItem()
    .setTitle('Are you currently registered as self-employed with HMRC?')
    .setChoiceValues([
      'Yes — I am registered for Self Assessment',
      'No — but I will register before accepting any work',
      'I operate through a limited company'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Do you hold your own Professional Indemnity insurance?')
    .setChoiceValues([
      'Yes — I hold my own PI insurance',
      'No — I understand I will work under Metaphrase Ltd\'s PI policy',
      'I am not sure — I would like to discuss this'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Your right to work in the United Kingdom')
    .setHelpText('We are legally required to verify the right to work of all individuals we engage. You will be asked to provide documentary evidence before starting any work.')
    .setChoiceValues([
      'British citizen (UK passport)',
      'Irish citizen',
      'EU/EEA — Settled Status (EUSS)',
      'EU/EEA — Pre-Settled Status (EUSS)',
      'Non-EU — valid work visa or Biometric Residence Permit',
      'Other — I have the right to work but will explain at interview'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Do you currently work with other translation agencies or clients?')
    .setHelpText('There is no wrong answer — we ask to understand your current workload')
    .setChoiceValues([
      'Yes — I work with other agencies / clients',
      'No — Metaphrase Ltd would be my first agency',
      'I am currently employed but looking to freelance'
    ])
    .setRequired(true);


  // ════════════════════════════════════════════════════════════
  // SECTION 9 — REFERENCES
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 9 — Professional Reference')
    .setHelpText('Please provide one professional reference. This must not be a family member. We only contact references for shortlisted candidates.');

  form.addTextItem()
    .setTitle('Reference — Full name')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Reference — Job title and organisation')
    .setHelpText('e.g. Practice Manager, Birmingham City Council')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Reference — Email address or phone number')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Reference — How does this person know you?')
    .setHelpText('e.g. Former employer, client, professional colleague')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Your LinkedIn profile URL')
    .setHelpText('Optional — e.g. linkedin.com/in/yourname')
    .setRequired(false);

  form.addTextItem()
    .setTitle('Your professional website or ProZ / ITI profile URL')
    .setHelpText('Optional — leave blank if not applicable')
    .setRequired(false);


  // ════════════════════════════════════════════════════════════
  // SECTION 10 — MOTIVATION
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 10 — Why Metaphrase Ltd?')
    .setHelpText('Almost done. Two final questions to help us get to know you.');

  form.addParagraphTextItem()
    .setTitle('Why do you want to work with Metaphrase Ltd specifically?')
    .setHelpText('Please write 2–4 sentences. Generic answers will score lower than genuine, specific responses.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Is there anything else you would like us to know about your skills, experience, or circumstances?')
    .setHelpText('This is your opportunity to mention anything not covered above — for example, specialist software you use (SDL Trados, memoQ), languages not listed, or anything else relevant')
    .setRequired(false);


  // ════════════════════════════════════════════════════════════
  // SECTION 11 — DECLARATION & PRIVACY
  // ════════════════════════════════════════════════════════════
  form.addPageBreakItem()
    .setTitle('Section 11 — Declaration & Data Privacy')
    .setHelpText(
      'Please read the following carefully before submitting.\n\n' +
      'DATA PRIVACY NOTICE: Metaphrase Ltd collects the information in this form to assess your suitability as a freelance linguist. ' +
      'Your data is held securely in accordance with UK GDPR and the Data Protection Act 2018. ' +
      'Unsuccessful applicants\' data is retained for 6 months unless you consent to 12 months in the question below. ' +
      'We will never sell or share your data with third parties without your explicit consent. ' +
      'To exercise your data rights, contact: privacy@metaphrase.uk'
    );

  form.addCheckboxItem()
    .setTitle('Declaration — please tick to confirm')
    .setHelpText('Both boxes are required to submit this application')
    .setChoiceValues([
      'I confirm that all information I have provided in this application is accurate and true to the best of my knowledge',
      'I have read and understood Metaphrase Ltd\'s data privacy notice above and consent to my data being processed for the purpose of this application'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('Data retention consent')
    .setHelpText('This is optional — your application will not be affected either way')
    .setChoiceValues([
      'Yes — I consent to Metaphrase Ltd retaining my application data for up to 12 months to be considered for future opportunities',
      'No — please delete my data after 6 months if I am not successful'
    ])
    .setRequired(false);

  form.addMultipleChoiceItem()
    .setTitle('How did you hear about this opportunity?')
    .setChoiceValues([
      'metaphrase.uk website',
      'LinkedIn',
      'Facebook group',
      'CIOL jobs board',
      'ITI network',
      'ProZ.com',
      'Word of mouth / recommendation',
      'University / college',
      'Indeed or Reed',
      'Other'
    ])
    .setRequired(false);


  // ── Final output ─────────────────────────────────────────────────────────
  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();

  Logger.log('');
  Logger.log('✅ FORM CREATED SUCCESSFULLY');
  Logger.log('================================================');
  Logger.log('Form title:      Freelance Linguist Application — Metaphrase Ltd');
  Logger.log('');
  Logger.log('Shareable link (send to applicants):');
  Logger.log(formUrl);
  Logger.log('');
  Logger.log('Edit link (your admin link — keep private):');
  Logger.log(editUrl);
  Logger.log('');
  Logger.log('NEXT STEPS:');
  Logger.log('1. Open the edit link above to review and adjust the form');
  Logger.log('2. Click Send → Link icon → copy the short link for sharing');
  Logger.log('3. Click Send → Embed icon (</>) → copy iframe code for your website');
  Logger.log('4. Go to Responses tab → click green Sheets icon to create a spreadsheet');
  Logger.log('================================================');
}
