import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import Api from "../../api/api"

interface FetchPatientsResponse {
    patients: Patient[]
}

export const fetchPatients = createAsyncThunk("patients/fetchAll", async () => {
    // const response = await Api.get<FetchPatientsResponse>("patients")
    // return response.patients
    return [
        {
            stlFile: "example.stl",
            phone: "+30 58/805 85 18",
            address: "724 Wiegand Stravenue, 2051 Blockport, Gibraltar",
            birthLocation: "Kesslerview, Guyana",
            birthDate: "0064-03-05T12:08:41.144Z",
            gender: "female",
            name: "Shelley Daniel V",
            id: "0",
        },
        {
            stlFile: "F040.stl",
            phone: "+86 07/220 02 37",
            address: "17024 W Main Street, 2125 New Joeyboro, Martinique",
            birthLocation: "Port Orlandworth, Sweden",
            birthDate: "0040-09-04T14:08:25.852Z",
            gender: "female",
            name: "Steve Moore",
            id: "1",
        },
        {
            stlFile: "F055.stl",
            phone: "+38 75/491 09 60",
            address: "8876 N Oak Street, 5035 East Coyside, Samoa",
            birthLocation: "North Cesarside, Aruba",
            birthDate: "0060-05-31T12:29:25.785Z",
            gender: "male",
            name: "Mrs. Jennifer Ward",
            id: "2",
        },
        {
            stlFile: "F062.stl",
            phone: "+00 61/158 00 86",
            address: "764 Bradtke Village, 5054 West Winifredstad, Belarus",
            birthLocation: "Oceanside, Monaco",
            birthDate: "0039-07-19T14:02:06.001Z",
            gender: "female",
            name: "Jon Volkman",
            id: "3",
        },
        {
            stlFile: "F062.stl",
            phone: "+77 04/279 09 51",
            address:
                "6671 Lilyan Loop, 0237 Lake Tyreekburgh, Falkland Islands (Malvinas)",
            birthLocation: "Lake Alvis, Turkmenistan",
            birthDate: "0026-04-15T00:18:13.235Z",
            gender: "male",
            name: "Flora O'Hara",
            id: "4",
        },
        {
            stlFile: "F062.stl",
            phone: "+55 75/808 22 35",
            address: "549 King Alley, 6192 Jadastad, Seychelles",
            birthLocation: "Kassulkeland, Slovakia",
            birthDate: "0057-02-08T19:23:40.342Z",
            gender: "female",
            name: "Jason Gleason Sr.",
            id: "5",
        },
        {
            stlFile: "F062.stl",
            phone: "+94 79/983 76 86",
            address: "28135 Ruecker Knolls, 9699 Kathlynburgh, Zambia",
            birthLocation: "Aubreeberg, Congo",
            birthDate: "0045-03-25T18:29:20.169Z",
            gender: "female",
            name: "Steven Stracke",
            id: "6",
        },
        {
            stlFile: "F062.stl",
            phone: "+18 04/354 92 68",
            address: "8782 Ferry Road, 3092 East Jadefield, Vietnam",
            birthLocation: "Velvahaven, Paraguay",
            birthDate: "0066-09-26T03:57:24.466Z",
            gender: "female",
            name: "Courtney Schumm",
            id: "7",
        },
        {
            stlFile: "F062.stl",
            phone: "+22 67/343 88 74",
            address: "583 Fritsch Overpass, 1686 Matildafort, Cyprus",
            birthLocation: "Fort Kelsi, Saint Pierre and Miquelon",
            birthDate: "0054-11-27T22:19:49.386Z",
            gender: "male",
            name: "Flora Hansen",
            id: "8",
        },
        {
            stlFile: "F062.stl",
            phone: "+94 92/470 68 08",
            address:
                "1922 Sigurd Crescent, 9040 North Ezequielstead, Kyrgyz Republic",
            birthLocation: "Cummingsmouth, Andorra",
            birthDate: "0052-07-06T18:08:42.366Z",
            gender: "male",
            name: "Matt Koepp",
            id: "9",
        },
        {
            stlFile: "F062.stl",
            phone: "+86 51/325 08 32",
            address: "3796 Kohler Place, 0337 Monahanfort, Denmark",
            birthLocation: "Shanahanworth, Gambia",
            birthDate: "0059-06-12T05:29:20.754Z",
            gender: "female",
            name: "Peggy Schamberger",
            id: "10",
        },
        {
            stlFile: "F062.stl",
            phone: "+48 38/851 11 08",
            address:
                "3013 Harber Throughway, 2197 Indio, Northern Mariana Islands",
            birthLocation: "Fort Rigoberto, Sweden",
            birthDate: "0018-02-14T16:34:50.771Z",
            gender: "male",
            name: "Marvin Steuber DVM",
            id: "11",
        },
        {
            stlFile: "F062.stl",
            phone: "+54 63/581 18 02",
            address: "1586 Kulas Creek, 5152 West Katharinaburgh, France",
            birthLocation: "Bedford, Nauru",
            birthDate: "0039-12-30T20:53:02.761Z",
            gender: "female",
            name: "Ida Maggio II",
            id: "12",
        },
        {
            stlFile: "F062.stl",
            phone: "+12 22/319 10 38",
            address: "71337 W Broad Street, 9301 Hymanshire, Costa Rica",
            birthLocation: "Tressieshire, Northern Mariana Islands",
            birthDate: "0064-06-30T15:24:31.507Z",
            gender: "female",
            name: "Gerald Jenkins",
            id: "13",
        },
        {
            stlFile: "F062.stl",
            phone: "+33 95/858 70 40",
            address: "7691 Hammes Parks, 5034 Meridian, United Kingdom",
            birthLocation: "Emardfort, Gibraltar",
            birthDate: "0066-09-17T20:11:25.117Z",
            gender: "female",
            name: "Dr. Shaun Homenick",
            id: "14",
        },
        {
            stlFile: "F062.stl",
            phone: "+05 17/334 36 17",
            address: "8245 Rosalinda Grove, 1286 Rempelton, Portugal",
            birthLocation: "San Bernardino, Puerto Rico",
            birthDate: "0020-03-21T03:40:48.844Z",
            gender: "male",
            name: "Helen Hansen II",
            id: "15",
        },
        {
            stlFile: "F062.stl",
            phone: "+33 71/349 73 34",
            address: "51626 Sally Port, 3940 Fort Kylerstad, Greenland",
            birthLocation: "Huntsville, Sweden",
            birthDate: "0033-03-01T12:26:13.028Z",
            gender: "male",
            name: "Johanna Adams Sr.",
            id: "16",
        },
        {
            stlFile: "F062.stl",
            phone: "+79 03/197 01 32",
            address: "89272 Anderson Court, 5775 Port Keltonborough, Poland",
            birthLocation: "Hyatttown, French Polynesia",
            birthDate: "0024-12-01T12:07:38.380Z",
            gender: "female",
            name: "Mandy Beier",
            id: "17",
        },
        {
            stlFile: "F062.stl",
            phone: "+83 71/747 71 60",
            address: "95424 5th Street, 5795 Port Leone, Brazil",
            birthLocation: "New Blancaboro, Bosnia and Herzegovina",
            birthDate: "0063-01-09T14:35:50.743Z",
            gender: "female",
            name: "Ralph Kuphal",
            id: "18",
        },
        {
            stlFile: "F062.stl",
            phone: "+86 62/039 64 65",
            address: "2667 Johnson Canyon, 2055 East Shaniacester, Namibia",
            birthLocation: "Fort Annabelle, El Salvador",
            birthDate: "0026-11-08T18:28:09.596Z",
            gender: "male",
            name: "Miss Erma Von",
            id: "19",
        },
        {
            stlFile: "F062.stl",
            phone: "+95 29/538 77 73",
            address: "453 Boyer Bridge, 6510 Dollyboro, Colombia",
            birthLocation: "Magnusboro, Greece",
            birthDate: "0018-05-25T13:00:51.296Z",
            gender: "male",
            name: "Shirley Bernier",
            id: "20",
        },
        {
            stlFile: "F062.stl",
            phone: "+75 80/597 98 36",
            address: "76887 Rodriguez Causeway, 1269 North Adonis, Maldives",
            birthLocation: "Fort Jackieton, Poland",
            birthDate: "0066-05-31T11:43:51.883Z",
            gender: "male",
            name: "Bethany Jenkins",
            id: "21",
        },
        {
            stlFile: "F062.stl",
            phone: "+70 23/667 97 75",
            address: "962 Kara Mountain, 6978 Arden-Arcade, Japan",
            birthLocation: "Loveland, Thailand",
            birthDate: "0053-07-07T04:50:24.286Z",
            gender: "male",
            name: "Gina Gorczany",
            id: "22",
        },
        {
            stlFile: "F062.stl",
            phone: "+78 34/380 76 82",
            address: "23964 Chanelle Lakes, 7945 Port Ibrahimbury, Cambodia",
            birthLocation: "East Cassidy, Grenada",
            birthDate: "0063-03-21T03:21:19.577Z",
            gender: "female",
            name: "Jon Mertz",
            id: "23",
        },
    ]
})

export interface PatientState {
    patients: Patient[]
    filter: string
    pageSize: number
    currentPage: number
}

const initialState: PatientState = {
    patients: [],
    filter: "",
    pageSize: 10,
    currentPage: 0,
}

export const patientsSlice = createSlice({
    name: "patientsSlice",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchPatients.fulfilled, (state, action) => {
            state.patients = action.payload
        })
        builder.addCase(fetchPatients.rejected, (state) => {
            state.patients = []
        })
    },
})

// Action creators are generated for each case reducer function
export const { setFilter, setCurrentPage } = patientsSlice.actions

export default patientsSlice.reducer
