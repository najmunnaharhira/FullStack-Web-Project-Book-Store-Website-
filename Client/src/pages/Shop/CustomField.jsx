import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label, required, autoFocus }) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: required && `${label} is required` }} // Validation rule for required fields
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label={label}
            fullWidth
            required={required}
            autoFocus={autoFocus}
            error={!!fieldState.error}
            helperText={fieldState.error ? fieldState.error.message : null}
            variant="outlined" // Use 'outlined' for a bordered input style
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
