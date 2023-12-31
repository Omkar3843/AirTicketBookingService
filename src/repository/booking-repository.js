const { StatusCodes } = require('http-status-code');

const { Booking } = require('../models/index');
const { AppError, ValidationError } = require('../utils/error/index');

class BookingRepository {
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name == 'sequelizeVlidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannnot create booking',
                'There was some issue creating the booking, please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

module.exports = BookingRepository;