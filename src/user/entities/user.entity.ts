import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity({name : "user" , schema :"test"})
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    username : string

    @Column()
    password : string

    @CreateDateColumn()
    createdAt : Date

    @UpdateDateColumn()
    updatedAt : Date

}
