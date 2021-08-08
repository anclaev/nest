import { Prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface AuthModel extends Base {}
export class AuthModel extends TimeStamps {
  @Prop({ unique: true })
  login: string;

  @Prop({ minlength: 8 })
  passwordHash: string;
}
