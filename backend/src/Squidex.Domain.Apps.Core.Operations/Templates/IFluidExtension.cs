﻿// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using Fluid;

namespace Squidex.Domain.Apps.Core.Templates;

public interface IFluidExtension
{
    void RegisterLanguageExtensions(CustomFluidParser parser, TemplateOptions options)
    {
    }

    void BeforeRun(TemplateContext templateContext)
    {
    }
}
