import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryColumn()
  readonly id: string;
  
  @Column()
  name: string;
  
  @Column()
  email: string;
  
  @Column()
  admin: boolean;
  
  @CreateDateColumn()
  created_at: Date;
  
  @UpdateDateColumn()
  updated_at: Date;
}
