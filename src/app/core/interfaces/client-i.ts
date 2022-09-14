import { StateClient } from '../enums/stateclient';

export interface ClientI {
  state: StateClient;
  tva: number;
  id: number;
  name: string;
  totalCaHt: number;
  comment: string;
}
