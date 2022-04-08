import React from 'react';
import { Grid, TextField, Typography, Button, FormControl } from '@mui/material';

const SignUp = () => {
    return (
        <Grid container className='whole_page_signup' columns={{xs:'12', sm:'12', md:'12', lg:'12', xl:'12'}} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Grid item className='form_signup' xs={6} sm={6} md={6} lg={6} xl={6} >
                <FormControl className='login_part' fullWidth>
                    <Typography variant='h4' margin={2}>Sign-Up</Typography>
                    <Grid item display='flex' flexDirection='column' className='form_input_grid'>
                        <Typography variant='p'>First Name</Typography>
                        <TextField size='small' columns={{xs:'12', sm:'12', md:'12', lg:'12', xl:'12'}} margin='dense' placeholder='First Name' fullWidth />
                    </Grid>
                    <Grid item display='flex' flexDirection='column' className='form_input_grid'>
                        <Typography variant='p'>Last Name</Typography>
                        <TextField size='small' margin='dense' placeholder='Last Name' fullWidth />
                    </Grid>
                    <Grid item display='flex' flexDirection='column' className='form_input_grid'>
                        <Typography variant='p'>Email</Typography>
                        <TextField size='small' margin='dense' placeholder='E-mail' fullWidth />
                    </Grid>
                    <Grid item display='flex' flexDirection='column' className='form_input_grid'>
                        <Typography variant='p'>Password</Typography>
                        <TextField size='small' margin='dense' placeholder='Password' fullWidth />
                    </Grid>
                    <Button sx={{ margin: '1rem' }} color='primary' variant='contained'>Signup</Button>
                </FormControl>
            </Grid>
        </Grid>
    );
}

export default SignUp