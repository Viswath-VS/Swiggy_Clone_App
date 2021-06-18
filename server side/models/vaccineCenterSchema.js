import mongoose from 'mongoose';

// const vaccineSlotSchema = new mongoose.Schema({
//     slot: {
//         type: String,
//         required: true,
//     },
//     dose_remaining: {
//         type: Number,
//         required: true,
//     },
//     vaccines: {
//         type: [String],
//         required: true,
//     },
//     availablity: {
//         type: Boolean,
//         required: true,
//     },
// });
// const vaccineDateSchema = new mongoose.Schema({
//     date: {
//         type: String,
//         required: true,
//     },
//     time_slots: [vaccineSlotSchema],
// });

const vaccineCenterSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    Vaccination_Center: {
        type: String,
        required: true,
    },
    Doses_Remaining: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        required: true,
    },
});

const VaccineCenter = mongoose.model('VaccineCenter', vaccineCenterSchema);

export default VaccineCenter;

// {
//     "vaccine_center":"xyz healthcenter",
//     "location":"thillai nagar, trichy.",
//     "vaccines":[
//        "CovidShield",
//        "Covaxin",
//        "Sputnik"
//     ],
//     "dates":[
//        {
//           "date":"24-Jun-2021",
//           "time_slots":[
//              {
//                 "slot":"9am - 11am",
//                 "dose_remaining":12,
//                 "vaccines":[
//                    "CovidShield",
//                    "Covaxin"
//                 ],
//                 "availablity":true
//              },
//              {
//                 "slot":"2pm - 4pm",
//                 "dose_remaining":1,
//                 "vaccines":[
//                    "Covaxin"
//                 ],
//                 "availablity":true
//              },
//              {
//                 "slot":"5pm - 7pm",
//                 "dose_remaining":0,
//                 "vaccines":[
//                    "Covaxin"
//                 ],
//                 "availablity":false
//              }
//           ]
//        },
//        {
//           "date":"25-Jun-2021",
//           "time_slots":[
//              {
//                 "slot":"9am - 11am",
//                 "dose_remaining":3,
//                 "vaccines":[
//                    "CovidShield",
//                    "Covaxin"
//                 ],
//                 "availablity":true
//              },
//              {
//                 "slot":"2pm - 4pm",
//                 "dose_remaining":6,
//                 "vaccines":[
//                    "CovidShield",
//                    "Covaxin"
//                 ],
//                 "availablity":true
//              },
//              {
//                 "slot":"5pm - 7pm",
//                 "dose_remaining":0,
//                 "vaccines":[
//                    "CovidShield"
//                 ],
//                 "availablity":false
//              }
//           ]
//        },
//        {
//           "date":"26-Jun-2021",
//           "time_slots":[
//              {
//                 "slot":"9am - 11am",
//                 "dose_remaining":10,
//                 "vaccines":[
//                    "CovidShield",
//                    "Covaxin"
//                 ],
//                 "availablity":true
//              },
//              {
//                 "slot":"2pm - 4pm",
//                 "dose_remaining":0,
//                 "vaccines":[
//                    "CovidShield"
//                 ],
//                 "availablity":false
//              },
//              {
//                 "slot":"5pm - 7pm",
//                 "dose_remaining":1,
//                 "vaccines":[
//                    "CovidShield"
//                 ],
//                 "availablity":true
//              }
//           ]
//        }
//     ]
//  }
