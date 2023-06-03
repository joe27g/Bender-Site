import { NextResponse } from 'next/server';
import { INVITE_PRO } from '../../../constants';
 
export async function GET() {
    return NextResponse.redirect(INVITE_PRO);
}