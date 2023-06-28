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