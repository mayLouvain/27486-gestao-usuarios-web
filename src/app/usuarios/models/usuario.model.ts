import { Status } from '../../shared/models/form-base.model';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  status: Status;
}
