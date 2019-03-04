import * as model from '../../../rest-api/model';
import * as vm from './viewModel';
import { mapMemberListModelToVM } from './mappers';

describe('pages/members/list/mappers specs', () => {

    describe('mapMemberListModelToVM', () => {
        it('should return empty array when passing undefined members', () => {
            //Arrange
            const members = undefined;

            // Act
            const result = mapMemberListModelToVM(members);

            //Assert
            expect(result).toEqual([]);

        }); 
    });

    it('should return empty array when passing null members', () =>{
        //Arrange
        const members = null;

        //Act
        const result = mapMemberListModelToVM(members);

        //Assert
        expect(result).toEqual([]);
        
    });

    it('should return empty array when passing empty members array', () => {
         //Arrange
         const members = [];

         //Act
         const result = mapMemberListModelToVM(members);
 
         //Assert
         expect(result).toEqual([]);
    });

    it('should return array with one item when passing members equals with one item', () => {

        //Arrange
        const members: model.Member[] = [
            {
                id: 1,
                login: 'test login',
                avatar_url: 'test avatar_url' 
            },
        ];

         //Act
         const result = mapMemberListModelToVM(members);
 
         //Assert
         const rightResult: vm.Member[] = [
            {
                id: 1,
                name: 'test login',
                avatarUrl: 'test avatar_url',
            },
        ];
        expect(result).toEqual(rightResult);

    })

});