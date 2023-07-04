export interface IUser {
    username: string;
    last_login: string;
    first_name: string;
    last_name: string;
    is_manager: boolean;
    is_expat: boolean;
    is_director: boolean;
    is_supporter: boolean;
    cellphone_number: number;
    email: string;
    house_address: string;
    turkish_id: number;
    tc_id_expiry_date: number;
    passport_number: number;
    passport_expiry_date: number;
    is_company_cars: boolean;
    is_driving_licenses: boolean;
    is_family_residence_permits: boolean;
    is_green_cards: boolean;
    is_houses: boolean;
    is_moving: boolean;
    is_pick_ups: boolean;
    is_work_permits: boolean;
    car_plate: string;
    company_car_model: string;
    car_model_year: number;
    house_location: string;
    car_location: string;
    gender: string;
    department: string;
    division: string;
    position: string;
    hq_position: string;
}

export interface IExpat {
    username: string;
    first_name: string;
    last_name: string;
}

export interface IWorkpermitList {
    pk: number;
    name: string;
    expat: IExpat;
    krstatus: string;
    krstatus_display: string;
    enstatus: string;
}

export interface IWorkpermitRequestList {
    pk:number;
    name: string;
    expat: IExpat;
    location: string;
    date: Date;
    krstatus: string;
    krstatus_display: string;
    created_at: Date;
    updated_at: Date;
}

export interface IResponsibleperson {
    username: string;
    first_name: string;
    last_name: string;
}

export interface IWorkpermitProcessList {
    title: string;
    subtitle: string;
    contents: string;
    detailed_information: string;
    subtitle2: string;
    contents2: string;
    detailed_information2: string;
    subtitle3: string;
    contents3: string;
    detailed_information3: string;
    subtitle4: string;
    contents4: string;
    detailed_information4: string;
    subtitle5: string;
    contents5: string;
    detailed_information5: string;
    subtitle6: string;
    contents6: string;
    detailed_information6: string;
    subtitle7: string;
    contents7: string;
    detailed_information7: string;
    subtitle8: string;
    contents8: string;
    detailed_information8: string;
    subtitle9: string;
    contents9: string;
    detailed_information9: string;
    subtitle10: string;
    contents10: string;
    detailed_information10: string;
    responsible_person: IResponsibleperson;
}

export interface IHeaderSecondAnnouncement {
    title: string;
    subtitle: string;
}