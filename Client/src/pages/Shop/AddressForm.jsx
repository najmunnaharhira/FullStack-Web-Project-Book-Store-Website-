import React, { useEffect, useState } from "react";
import { Button, Grid, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddressForm = ({ onSubmit }) => {
  const methods = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  useEffect(() => {
    // Simulated API calls to fetch data
    const fetchShippingCountries = async () => {
      // Mock data for demonstration
      const countries = {
        'US': 'United States',
        'CA': 'Canada',
        'GB': 'United Kingdom',
        'AU': 'Australia',
      };
      setShippingCountries(countries);
      setShippingCountry('US'); // Default country
    };

    const fetchSubdivisions = async (countryCode) => {
      // Mock data for demonstration
      const subdivisions = {
        'NY': 'New York',
        'CA': 'California',
        'TX': 'Texas',
        'FL': 'Florida',
      };
      setShippingSubdivisions(subdivisions);
      setShippingSubdivision('NY'); // Default subdivision
    };

    fetchShippingCountries();
    fetchSubdivisions('US'); // Default to US for subdivisions
  }, []);

  const handleCountryChange = (event) => {
    setShippingCountry(event.target.value);
    // Reset subdivisions and options when country changes
    setShippingSubdivision('');
    setShippingOption('');
  };

  const handleSubdivisionChange = (event) => {
    setShippingSubdivision(event.target.value);
    // Reset options when subdivision changes
    setShippingOption('');
  };

  const handleSubmit = methods.handleSubmit((data) =>
    onSubmit({ ...data, shippingCountry, shippingSubdivision, shippingOption })
  );

  return (
    <>
      <Typography variant="h6" gutterBottom>Shipping address</Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                onChange={handleCountryChange}
                fullWidth
              >
                {Object.entries(shippingCountries).map(([code, name]) => (
                  <MenuItem key={code} value={code}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                onChange={handleSubdivisionChange}
                fullWidth
              >
                {Object.entries(shippingSubdivisions).map(([code, name]) => (
                  <MenuItem key={code} value={code}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Address Line 1</InputLabel>
              <input
                {...methods.register('address1', { required: true })}
                className="form-control"
                placeholder="Enter your address"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>City</InputLabel>
              <input
                {...methods.register('city', { required: true })}
                className="form-control"
                placeholder="Enter your city"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel>ZIP / Postal code</InputLabel>
              <input
                {...methods.register('zip', { required: true })}
                className="form-control"
                placeholder="Enter your ZIP / Postal code"
              />
            </Grid>

            <Grid item xs={12}>
              <InputLabel>Email</InputLabel>
              <input
                {...methods.register('email', { required: true })}
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </Grid>

            <Grid item xs={12}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                <Button type="submit" variant="contained" color="primary">Next</Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
