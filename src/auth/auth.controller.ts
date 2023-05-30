import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './utils/Guards';
import { Request, Response } from 'express'


@Controller('auth')
export class AuthController {

    @Get('google/login')
    @UseGuards(GoogleAuthGuard)
    handleLogin() {
        return { msg: 'Google authentication' }
    }

    @Get('google/redirect')
    @UseGuards(GoogleAuthGuard)
    handleRedirect() {

        console.log('que verga esto')
        return { msg: 'ok' }
    }

    @Get('status')
    @UseGuards(GoogleAuthGuard)
    user(@Req() request: Request) {
        console.log('Checking...')
        if (request.user) {
            return { msg: 'Authenticated' }
        } else {
            return { msg: 'Not Authenticated' }
        }
    }

}
