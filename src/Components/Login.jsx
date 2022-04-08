import React from 'react';
import { Grid, TextField, Typography, Button, FormControl } from '@mui/material';
import '../Styles/Style.css';

const Login = () => {
    return (
        <Grid container className='whole_page' xs={12} sm={12} md={12} lg={12} xl={12} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Grid item className='login_form' xs={6} sm={6} md={6} lg={6} xl={6} >
                <FormControl className='login_part' fullWidth>
                    <Typography variant='h4' margin={2}>Login</Typography>
                    <TextField className='text_field' size='small' variant='filled' xs={12} sm={12} md={12} lg={12} xl={12} margin='dense' placeholder='Username' fullWidth />
                    <TextField className='text_field' size='small' variant='filled' xs={12} sm={12} md={12} lg={12} xl={12} margin='dense' placeholder='Password' fullWidth />
                    <Button sx={{margin: '1rem'}} color='success' variant='contained'>Submit</Button>
                </FormControl>
            </Grid>
            <Typography color={'white'} variant='p' xs={4} sm={4} md={4} lg={4} xl={4}>Forgot your password? <a href='#'>click here</a></Typography>
        </Grid>
    );
}

export default Login;