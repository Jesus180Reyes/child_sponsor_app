export interface ChildsResponse {
    ok:     boolean;
    childs: Childs;
}

export interface Childs {
    count: number;
    rows:  Row[];
}

export interface Row {
    name:       string;
    lastName:   string;
    community:  string;
    code:       string;
    birthday:   Date;
    state:      boolean;
    gender:     string;
    createdAt:  Date;
    updatedAt:  Date;
    currentAge: number;
    uid:        number;
}
