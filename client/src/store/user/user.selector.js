import {createSelector} from 'reselect'

// input selectors
const selectUser = state => state.user

// output selectors
export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.current_user
)

export const selectAuthError = createSelector(
    [selectUser],
    user => user.error
)

export const selectAuthLoading = createSelector(
    [selectUser],
    user => user.loading
)

// this selector is for opening error snackbar 
export const selectAuthErrCompOpen = createSelector(
    [selectUser],
    user => user.openErrComp
)



