export interface DataDto {
  company: string;
  company_logo: string;
  company_url: string;
  created_at: string;
  description: string;
  how_to_apply: string;
  id: string;
  location: string;
  title: string;
  type: string;
  url: string;
}

export interface ProfileDto {
  email: string;
  family_name: string;
  given_name: string;
  id: string;
  name: string;
  picture: string;
  verified_email: boolean;
}
