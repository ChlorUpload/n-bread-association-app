import { MemberState, ProductType, ProfileType } from "../State";

export enum ResStatus {
    success = 0,
    failed = 1,
}

export enum FailureCode {
    ok = 0,
    invalidArgument = 1,
    accessDenied = 2,
    duplicateEmail = 3,
    unknownError = 4,
}

export class Res
{
    status: ResStatus = ResStatus.success;
    log: string = "";
    failureCode: FailureCode = FailureCode.ok;
}

export class FetchProductRes extends Res {
    payload: ProductType[] = [];
}

export class FetchProfileRes extends Res {
    payload: ProfileType = {
        email: "",
        id: -1,
        name: "",
        password: "",
        verified: false,
    }
}

export class LoginRes extends Res {
    payload: {
        accessToken: string;
    } = {
        accessToken: "",
    };
}

export class VerifyAccessTokenRes extends Res {
}

export default class ServerService
{
    public static async fetchProducts(): Promise<FetchProductRes>
    {
        return {
            status: ResStatus.success,
            log: "",
            failureCode: FailureCode.ok,
            payload: [
                {
                    categories: [{id: 1, title: "생수"}, {id: 2, title: "음료"}],
                    id: 1,
                    title: "하루e리터 2710mL 6팩 같이 사실분 구해요",
                    expiresAt: new Date(2020, 11, 30),
                    memberState: MemberState.notEnrolled,
                    occupiedPiece: 3,
                    piece: 6,
                    piecePrice: 700,
                },
                {
                    categories: [{id: 2, title: "음료"}],
                    id: 2,
                    title: "몬스터 24캔 사면 가져갈사람있나요",
                    expiresAt: new Date(2020, 11, 28),
                    memberState: MemberState.notEnrolled,
                    occupiedPiece: 22,
                    piece: 24,
                    piecePrice: 1600,
                },
                {
                    categories: [{id: 3, title: "생활용품"}],
                    id: 3,
                    title: "아 ㅋㅋ 휴지 롤 한개씩은 못참지",
                    expiresAt: new Date(2020, 11, 18),
                    memberState: MemberState.host,
                    occupiedPiece: 2,
                    piece: 6,
                    piecePrice: 600,
                },
            ]
        }
    }

    public static async login(email: string, password: string): Promise<LoginRes>
    {
        return {
            status: ResStatus.success,
            log: "",
            failureCode: FailureCode.ok,
            payload: {
                accessToken: "token"
            }
        }
    }

    public static async fetchProfile(accessToken: string): Promise<FetchProfileRes>
    {
        return {
            status: ResStatus.success,
            log: "",
            failureCode: FailureCode.ok,
            payload: {
                name: "송대건",
                email: "ghahddl@dgist.ac.kr",
                id: 1,
                password: "password",
                verified: false,
            }
        }
    }

    public static async verifyAccessToken(accessToken: string): Promise<VerifyAccessTokenRes>
    {
        return {
            status: ResStatus.success,
            log: "",
            failureCode: FailureCode.ok,
        }
    }
}