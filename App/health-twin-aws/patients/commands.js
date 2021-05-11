'use strict';

const uuid = require('uuid');
const bus = require("./lib/bus")();

module.exports.createPatient = (event, context, callback) => {
    const data = JSON.parse(event.body);

    // Validation
    /*
   if (typeof data.title !== 'string' || typeof data.author !== 'string') {
     callback('Validation error');
     return;
   }
    */
   
    let generatedId = uuid.v1();
    const createPatientEvent = {
      type: 'create-patient',
      timestamp: new Date().getTime(),
      id: generatedId,
      payload: {
        id: generatedId,
        nhc: data.nhc,
        icu_admission_date: data.icu_admission_date, 
        age: data.age, 
        sex: data.sex,
        height: data.height, 
        weigth: data.weigth,
        alt_gpt: data.alt_gpt,
        ast_got: data.ast_got,
        beecf_amax: data.beecf_amax, 
        beecf_amin: data.beecf_amin, 
        beecf_mean: data.beecf_mean, 
        basophils: data.basophils, 
        bicarb: data.bicarb,
        bicarb_real_amax: data.bicarb_real_amax, 
        bicarb_real_amin: data.bicarb_real_amin,
        bicarb_real_mean: data.bicarb_real_mean, 
        bilirubin_t: data.bilirubin_t, 
        ck: data.ck,
        co2_total_amax: data.co2_total_amax,
        co2_total_amin: data.co2_total_amin, 
        co2_total_mean: data.co2_total_mean,
        chlorine: data.chlorine, 
        creatinine: data.creatinine, 
        dimer_d: data.dimer_d,
        eosinophils: data.eosinophils,
        exc_bases_amax: data.exc_bases_amax,
        exc_bases_amin: data.exc_bases_amin,
        exc_bases_mean: data.exc_bases_mean,
        fr_established_max: data.fr_established_max,
        fr_established_mean: data.fr_established_mean,
        fr_established_min: data.fr_established_min,
        fr_real_max: data.fr_real_max,
        fr_real_mean: data.fr_real_mean,
        fr_real_min: data.fr_real_min,
        ferritin: data.ferritin,
        fio2_max: data.fio2_max,
        fio2_mean: data.fio2_mean,
        fio2_min: data.fio2_min,
        fibrinogen: data.fibrinogen,
        glucose: data.glucose,
        hb: data.hb,
        hco3_amax: data.hco3_amax,
        hco3_amin: data.hco3_amin,
        hco3_mean: data.hco3_mean,
        inr: data.inr,
        ldh: data.ldh,
        lactate: data.lactate,
        leukocytes: data.leukocytes,
        lymphocytes: data.lymphocytes,
        monocytes: data.monocytes,
        neutrophils: data.neutrophils,
        pcr: data.pcr,
        peep_max: data.peep_max,
        peep_mean: data.peep_mean,
        peep_min: data.peep_min,
        pva_avg_max: data.pva_avg_max,
        pva_avg_mean: data.pva_avg_mean,
        pva_avg_min: data.pva_avg_min,
        pva_max: data.pva_max,
        pva_max_max: data.pva_max_max,
        pva_max_min: data.pva_max_min,
        ph_arterial_amax: data.ph_arterial_amax,
        ph_arterial_amin: data.ph_arterial_amin,
        ph_arterial_mean: data.ph_arterial_mean,
        platelets: data.platelets,
        potassium: data.potassium,
        procalcitonin: data.procalcitonin,
        sat_o2_amax: data.sat_o2_amax,
        sat_o2_amin: data.sat_o2_amin,
        sat_o2_mean: data.sat_o2_mean,
        sodium: data.sodium,
        tp_track: data.tp_track,
        ttpa: data.ttpa,
        troponin: data.troponin,
        urea_mg_dl: data.urea_mg_dl,
        vt_exhaled_max: data.vt_exhaled_max,
        vt_exhaled_mean: data.vt_exhaled_mean,
        vt_exhaled_min: data.vt_exhaled_min,
        pco2_amax: data.pco2_amax,
        pco2_amin: data.pco2_amin,
        pco2_mean: data.pco2_mean,
        po2_amax: data.po2_amax,
        po2_amin: data.po2_amin,
        po2_mean: data.po2_mean
      }
  };
  
  bus.publish(createPatientEvent,
    msg => {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createPatientEvent.payload)
      })
    },
    err => {
      callback(null, {
        statusCode: 500,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({"error": err})
      })
    }
  );
};