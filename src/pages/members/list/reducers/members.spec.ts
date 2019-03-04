import deepFreeze from 'deep-freeze';
import { actionIds } from '../actions/actionIds';
import { membersReducer, MembersState } from './members';

describe('pages/members/list/reducers/members specs', () => {
    it('should return initial state when passing undefined state and some action type', () => {
        // Arrange
        const state = undefined;
        const action = {type: 'some'};

        // Act
        const result = membersReducer(state, action);

        // Assert
        expect(result).toEqual([]);

    });

    it('should return same state without mutate it when passing state and some action type', () => {
        // Arrange
        const state: MembersState = [
            { 
                id: 1, 
                login: 'test login', 
                avatar_url: 'test avatar_url' 
            },
        ];
        const action = {type: 'some type'};
        deepFreeze(state);

        // Act
        const nextState = membersReducer(state, action);

        // Assert
        expect(nextState).toEqual([
            { 
                id: 1, 
                login: 'test login', 
                avatar_url: 'test avatar_url' 
            },
        ]);
    });

    it(`should return updated state without mutate it when passing state, actionIds.UPDATE_MEMBERS action type and members payload`, () => {
     // Arrange
     const state: MembersState = [
        { 
           id: 1, 
           login: 'test login', 
           avatar_url: 'test avatar_url' 
       },
     ];
     const payload = [
        { 
           id: 2, 
           login: 'test login 2', 
           avatar_url: 'test avatar_url 2' 
        },
        { 
           id: 3, 
           login: 'test login 3', 
           avatar_url: 'test avatar_url 3' 
        },
     ];

     const action = {
       type: actionIds.UPDATE_MEMBERS,
       payload,
     };
     deepFreeze(state);

     // Act
     const result = membersReducer(state, action);

     // Assert
     expect(result).toEqual(payload);
   });

});