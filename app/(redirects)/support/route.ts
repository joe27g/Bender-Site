import { NextResponse } from 'next/server';
import { SUPPORT } from '../../../constants';
 
export async function GET() {
    return NextResponse.redirect(SUPPORT);
}