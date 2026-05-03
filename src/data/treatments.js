export const createTreatmentSlug = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const treatmentCategories = [
  {
    title: "Medical Dermatology",
    treatments: [
      {
        name: "Acne & Acne Scar Treatment",
        duration: "45-60 mins",
        bestFor: "Active acne, clogged pores, marks, pits, and recurring breakouts",
        details: "A dermatologist-led plan using medicines, peels, lasers, microneedling, or scar procedures depending on acne type and scar depth.",
        sessions: "Usually 4-8 sessions for visible scar improvement",
        aftercare: "Use sunscreen daily, avoid picking, and follow prescribed skin care strictly."
      },
      {
        name: "Psoriasis Management",
        duration: "30 mins",
        bestFor: "Red, scaly, itchy patches on scalp, elbows, knees, or body",
        details: "Long-term control plan with topical medicines, lifestyle advice, and advanced therapy when needed.",
        sessions: "Follow-up based care",
        aftercare: "Moisturize regularly, avoid triggers, and continue treatment as advised."
      },
      {
        name: "Eczema Treatment",
        duration: "30 mins",
        bestFor: "Dry, itchy, sensitive, inflamed, or allergy-prone skin",
        details: "Barrier repair, anti-inflammatory treatment, trigger identification, and maintenance skin care for flare prevention.",
        sessions: "Depends on severity",
        aftercare: "Avoid harsh soaps, fragrance, and hot water; keep skin moisturized."
      },
      {
        name: "Skin Allergy Solutions",
        duration: "30 mins",
        bestFor: "Rashes, hives, itching, redness, and product reactions",
        details: "Evaluation of allergic or irritant causes with medicines and preventive skin-care guidance.",
        sessions: "Usually consultation plus review",
        aftercare: "Stop suspected irritants and use only recommended products."
      },
      {
        name: "Fungal Infection Treatment",
        duration: "30 mins",
        bestFor: "Ringworm, athlete's foot, nail fungus, or recurrent fungal rash",
        details: "Diagnosis-based antifungal plan for skin, scalp, or nails with hygiene guidance to reduce recurrence.",
        sessions: "2-6 weeks or longer for nails",
        aftercare: "Keep the area dry, avoid sharing towels, and complete the full course."
      },
      {
        name: "Vitiligo Treatment",
        duration: "30 mins",
        bestFor: "White patches caused by pigment loss",
        details: "Personalized treatment using medicines, light-based therapy, and monitoring for spread or repigmentation.",
        sessions: "Requires regular follow-up",
        aftercare: "Protect skin from sunburn and follow application instructions carefully."
      },
      {
        name: "Hair Loss Solutions",
        duration: "30-45 mins",
        bestFor: "Hair fall, thinning, dandruff-related shedding, and patchy hair loss",
        details: "Root-cause assessment with medicines, scalp care, PRP, or supportive treatments as needed.",
        sessions: "Monthly review or PRP sessions when advised",
        aftercare: "Avoid crash diets and harsh hair treatments during therapy."
      }
    ]
  },
  {
    title: "Cosmetic Dermatology",
    treatments: [
      {
        name: "Botox & Anti-Wrinkle Injections",
        duration: "20-30 mins",
        bestFor: "Forehead lines, frown lines, crow's feet, and expression wrinkles",
        details: "Precise injections relax selected facial muscles to soften dynamic lines while preserving natural expressions.",
        sessions: "Results usually last 3-6 months",
        aftercare: "Avoid lying down, rubbing the area, or heavy exercise for a few hours."
      },
      {
        name: "Dermal Fillers",
        duration: "30-45 mins",
        bestFor: "Volume loss, facial contouring, lips, folds, and under-eye hollowness",
        details: "Hyaluronic-acid based fillers restore volume and shape with a customized facial assessment.",
        sessions: "Results vary by area and filler type",
        aftercare: "Avoid pressure, massage, and heat exposure unless advised."
      },
      {
        name: "Chemical Peels",
        duration: "30-45 mins",
        bestFor: "Acne, dullness, pigmentation, tanning, fine lines, and uneven texture",
        details: "Medical-grade peel solutions exfoliate controlled layers of skin to reveal brighter, smoother skin.",
        sessions: "Usually 4-6 sessions",
        aftercare: "Sunscreen is mandatory; avoid scrubs, waxing, and active products for a few days."
      },
      {
        name: "Thread Lift",
        duration: "60-90 mins",
        bestFor: "Mild sagging, jawline definition, and non-surgical lifting",
        details: "Dissolvable threads are placed under the skin to provide lift and stimulate collagen support.",
        sessions: "Single procedure with review",
        aftercare: "Avoid wide mouth opening, facial massage, and heavy exercise initially."
      },
      {
        name: "Lip Augmentation",
        duration: "30-45 mins",
        bestFor: "Thin lips, asymmetry, shape correction, and hydration",
        details: "Careful filler placement enhances lip shape and volume with a balanced, natural finish.",
        sessions: "Usually one session",
        aftercare: "Expect mild swelling; avoid heat and pressure for 24-48 hours."
      },
      {
        name: "Under Eye Rejuvenation",
        duration: "30-45 mins",
        bestFor: "Dark circles, hollowness, tired look, and fine lines",
        details: "Combination approach using creams, peels, lasers, PRP, or fillers based on the cause.",
        sessions: "Varies by concern",
        aftercare: "Use sunscreen and avoid rubbing the delicate under-eye skin."
      }
    ]
  },
  {
    title: "Laser Treatments",
    treatments: [
      {
        name: "Laser Hair Removal",
        duration: "20-60 mins",
        bestFor: "Unwanted hair on face, underarms, arms, legs, back, or bikini area",
        details: "Laser energy targets hair follicles to reduce growth over a planned series of sessions.",
        sessions: "Usually 6-8 sessions",
        aftercare: "Avoid waxing, threading, and direct sun exposure around sessions."
      },
      {
        name: "Laser Tattoo Removal",
        duration: "15-45 mins",
        bestFor: "Unwanted professional or amateur tattoos",
        details: "Laser pulses break tattoo pigment so the body can gradually clear it.",
        sessions: "Multiple sessions depending on color, depth, and age of tattoo",
        aftercare: "Keep area clean, avoid picking, and protect from sun."
      },
      {
        name: "Fractional CO2 Laser",
        duration: "45-60 mins",
        bestFor: "Acne scars, surgical scars, pores, wrinkles, and texture correction",
        details: "Fractional laser resurfacing creates tiny treatment zones to remodel collagen and improve skin texture.",
        sessions: "Usually 3-5 sessions",
        aftercare: "Downtime is expected; strict sunscreen and healing care are essential."
      },
      {
        name: "Q-Switch Laser",
        duration: "20-30 mins",
        bestFor: "Pigmentation, tanning, freckles, melasma support, and tattoo pigment",
        details: "Short laser pulses target pigment while protecting surrounding skin when used appropriately.",
        sessions: "Varies by pigmentation type",
        aftercare: "Avoid sun exposure and use prescribed pigment-control products."
      },
      {
        name: "Laser for Pigmentation",
        duration: "30-45 mins",
        bestFor: "Dark spots, sun spots, uneven tone, and resistant pigmentation",
        details: "A tailored laser protocol is selected after assessing pigment depth and skin type.",
        sessions: "Usually 4-6 sessions",
        aftercare: "Sunscreen, maintenance creams, and trigger control are important."
      },
      {
        name: "Laser for Stretch Marks",
        duration: "30-60 mins",
        bestFor: "Old or new stretch marks on abdomen, thighs, arms, or back",
        details: "Laser-based collagen stimulation helps improve texture, color, and firmness over time.",
        sessions: "Usually 4-6 sessions",
        aftercare: "Moisturize and avoid tanning the treated area."
      }
    ]
  },
  {
    title: "Skin Rejuvenation",
    treatments: [
      {
        name: "HydraFacial",
        duration: "45-60 mins",
        bestFor: "Dullness, dryness, blackheads, congestion, and event glow",
        details: "A multi-step treatment that cleanses, extracts, hydrates, and infuses skin with active serums.",
        sessions: "Monthly maintenance or before events",
        aftercare: "Avoid harsh actives for 24 hours and keep skin hydrated."
      },
      {
        name: "Microdermabrasion",
        duration: "30-45 mins",
        bestFor: "Rough texture, tanning, superficial marks, and dull skin",
        details: "Gentle mechanical exfoliation removes dead skin cells and improves smoothness.",
        sessions: "Usually 4-6 sessions",
        aftercare: "Use moisturizer and sunscreen; avoid scrubs for a few days."
      },
      {
        name: "PRP Therapy",
        duration: "60-90 mins",
        bestFor: "Hair thinning, skin rejuvenation, under-eye support, and acne scars",
        details: "Platelet-rich plasma from your own blood is used to stimulate repair and collagen activity.",
        sessions: "Usually 3-6 sessions",
        aftercare: "Avoid anti-inflammatory medicines unless prescribed and follow aftercare instructions."
      },
      {
        name: "Mesotherapy",
        duration: "30-45 mins",
        bestFor: "Hair fall support, hydration, glow, and targeted skin concerns",
        details: "Microinjections deliver selected ingredients into superficial skin or scalp layers.",
        sessions: "Usually a planned series",
        aftercare: "Avoid makeup, sweating, and touching the area for several hours."
      },
      {
        name: "Derma Roller / Microneedling",
        duration: "45-60 mins",
        bestFor: "Acne scars, pores, texture, fine lines, and collagen stimulation",
        details: "Controlled microchannels trigger healing and collagen remodeling for smoother skin.",
        sessions: "Usually 4-6 sessions",
        aftercare: "Avoid sun, makeup, and active products until skin settles."
      },
      {
        name: "Carbon Peel",
        duration: "30-45 mins",
        bestFor: "Oily skin, open pores, tanning, and instant glow",
        details: "A carbon layer and laser treatment help refresh skin, reduce oiliness, and brighten tone.",
        sessions: "Monthly or as advised",
        aftercare: "Use sunscreen and avoid heat exposure for 24 hours."
      }
    ]
  },
  {
    title: "Anti-Aging Treatments",
    treatments: [
      {
        name: "Skin Tightening",
        duration: "45-60 mins",
        bestFor: "Loose skin, mild sagging, jawline softness, and collagen loss",
        details: "Energy-based or collagen-stimulating options are selected according to age, skin laxity, and treatment goals.",
        sessions: "Usually 3-6 sessions",
        aftercare: "Maintain hydration and sunscreen; results build gradually."
      },
      {
        name: "RF Microneedling",
        duration: "60 mins",
        bestFor: "Acne scars, pores, sagging, fine lines, and texture",
        details: "Microneedles deliver radiofrequency energy deeper into skin to remodel collagen.",
        sessions: "Usually 3-5 sessions",
        aftercare: "Expect redness; avoid makeup and active products initially."
      },
      {
        name: "Ultherapy",
        duration: "60-90 mins",
        bestFor: "Non-surgical lifting of face, neck, and jawline",
        details: "Focused ultrasound energy targets deeper support layers to lift and tighten over time.",
        sessions: "Often one session with review",
        aftercare: "Minimal downtime; results improve gradually over weeks."
      },
      {
        name: "Stem Cell Therapy",
        duration: "60 mins",
        bestFor: "Skin repair, rejuvenation support, and hair restoration plans",
        details: "Regenerative protocols are chosen after consultation and combined with supportive skin or hair care.",
        sessions: "Depends on indication",
        aftercare: "Follow clinic-specific post-procedure guidance."
      }
    ]
  },
  {
    title: "Surgical Procedures",
    treatments: [
      {
        name: "Mole Removal",
        duration: "20-45 mins",
        bestFor: "Raised or unwanted moles after dermatologist evaluation",
        details: "Removal method is selected based on mole type, size, site, and whether biopsy is needed.",
        sessions: "Usually one procedure",
        aftercare: "Keep wound clean and attend follow-up if advised."
      },
      {
        name: "Wart Removal",
        duration: "15-30 mins",
        bestFor: "Common warts, plantar warts, and resistant viral warts",
        details: "Treatment may include cautery, cryotherapy, laser, or medicines depending on wart location and number.",
        sessions: "May require repeat sessions",
        aftercare: "Avoid picking and keep area protected until healed."
      },
      {
        name: "Skin Biopsy",
        duration: "20-30 mins",
        bestFor: "Suspicious, unclear, or persistent skin lesions",
        details: "A small sample is taken under local anesthesia and sent for diagnostic testing when needed.",
        sessions: "One procedure plus report review",
        aftercare: "Follow wound-care instructions and return for suture removal if required."
      },
      {
        name: "Cyst Removal",
        duration: "30-60 mins",
        bestFor: "Sebaceous cysts, recurrent cysts, or painful lumps",
        details: "Minor surgical removal helps reduce recurrence and discomfort after clinical assessment.",
        sessions: "Usually one procedure",
        aftercare: "Keep dressing dry and attend follow-up for healing review."
      },
      {
        name: "Nail Surgery",
        duration: "30-60 mins",
        bestFor: "Ingrown toenail, painful nail edge, or chronic nail infection",
        details: "A targeted nail procedure relieves pain and treats the affected portion while preserving function.",
        sessions: "Usually one procedure",
        aftercare: "Use footwear carefully and follow dressing instructions."
      }
    ]
  }
];

export const treatmentNames = treatmentCategories.flatMap((category) =>
  category.treatments.map((treatment) => treatment.name)
);

export const treatmentsWithCategories = treatmentCategories.flatMap((category) =>
  category.treatments.map((treatment) => ({
    ...treatment,
    category: category.title,
    slug: createTreatmentSlug(treatment.name)
  }))
);

export const getTreatmentBySlug = (slug) =>
  treatmentsWithCategories.find((treatment) => treatment.slug === slug);

export const getTreatmentPath = (name) =>
  `/treatments/${createTreatmentSlug(name)}`;
