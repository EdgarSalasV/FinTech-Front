import * as React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  FormControl,
  FormHelperText,
  Avatar,
  Link,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import * as Utils from "../../../../utils";
import axios from "axios";
import { iLogin } from "../types";
import { connect } from "react-redux";
import { login } from "../../../../redux/reduxs/auth/authCrud";
import * as auth from "../../../../redux/reduxs/auth/authSlide";
import { iAuth, iActions } from "../../../../redux/reduxs/auth/types/authTypes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.warning.main,
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    margin: {
      margin: theme.spacing(1),
    },
    form: {
      // width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(2),
      // display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  })
);
interface iForm {
  password: string;
  showPassword: boolean;
}
const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Funky Town Yonky
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

function LoginForm(props: iActions) {
  console.log('props', props)
  const classes = useStyles();

  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState<iForm>({
    password: "",
    showPassword: false,
  });

  let loginSchema = yup.object().shape({
    email: yup.string().email().required("Enter your email"),
    password: yup.string().required("Enter your password"),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginSchema,
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const handleChange = (prop: keyof iForm) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = async (values: iLogin) => {
    let { email, password } = values;
    try {
      // ${process.env.REACT_APP_API_BASE}/api/v1/users/login/
      // let resp = await
      localStorage.removeItem("forgot_pwd_notif");
      enableLoading();
      login(email, password)
      .then((resp: {data: iAuth}) => {
        const { id, email, created_at, updated_at, jti } = resp.data;
        props.login(id, email, created_at, updated_at, jti);
        disableLoading();
      });
    } catch (error) {
      console.log("error LOGIN", error);
    }
  };

  return (
    // <div className={classes.root}>
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
      </Avatar>
      <Typography component="h1" variant="h5" gutterBottom>
        Flow FinTech
      </Typography>
      <Typography component="span" variant="subtitle1">
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <FormControl
          // className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          fullWidth
        >
          <TextField
            name="email"
            inputRef={register}
            label="Email"
            // className={clsx(classes.margin, classes.textField)}
            margin="normal"
            variant="outlined"
            // fullWidth
            error={errors.email ? true : false}
            helperText={
              errors.email
                ? Utils.fistLetterUpperLower(errors.email.message, true)
                : ""
            }
          />
        </FormControl>

        <FormControl
          // className={clsx(classes.margin, classes.textField)}
          variant="outlined"
          fullWidth
        >
          <InputLabel
            error={errors.password ? true : false}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            // className={clsx(classes.margin, classes.textField)}
            id="outlined-adornment-password"
            name="password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            inputRef={register}
            error={errors.password ? true : false}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          {errors.password && (
            <FormHelperText id="standard-error-helper-text" error>
              {Utils.fistLetterUpperLower(errors.password.message, true)}
            </FormHelperText>
          )}
        </FormControl>

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/SignUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>

    // </div>
  );
}

// export default connect(null, auth.actions)(LoginForm);
export default connect(null, auth.actions)(LoginForm);
