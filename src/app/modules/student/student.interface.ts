// 1. Create an interface representing a document in MongoDB.
export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type User = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type GurdianType = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: User;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  parmanentAddress: string;
  gurdian: GurdianType;
  localGurdian: LocalGurdian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
};
